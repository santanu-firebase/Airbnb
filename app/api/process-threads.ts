// pages/api/process-threads.ts
import { NextApiRequest, NextApiResponse } from 'next';
import * as fs from 'fs';
import * as path from 'path';
import { RootSchema, detectConversationPhases, summarizePhase, ConversationPhase } from '../../app';
import dayjs from 'dayjs';
import OpenAI from 'openai';

const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;
const SITE_URL = process.env.OPENROUTER_SITE_URL || 'https://example.com';
const SITE_NAME = process.env.OPENROUTER_SITE_NAME || 'PhaseApp';
const GEMINI_MODEL = 'google/gemini-2.0-flash-exp:free';

// Create OpenAI instance
const openai = new OpenAI({
  baseURL: 'https://openrouter.ai/api/v1',
  apiKey: OPENROUTER_API_KEY,
  defaultHeaders: {
    'HTTP-Referer': SITE_URL,
    'X-Title': SITE_NAME,
  },
});

async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const filePath = path.join(process.cwd(), 'messages.json');
    const rawData = fs.readFileSync(filePath, 'utf-8');
    const parsed = JSON.parse(rawData);

    const rootItems = RootSchema.parse(parsed);

    const checkinDate = dayjs('2025-01-20T14:00:00Z').toDate();
    const checkoutDate = dayjs('2025-01-25T10:00:00Z').toDate();

    for (let i = 0; i < rootItems.length; i++) {
      const item = rootItems[i];
      const { messageThreads } = item;

      for (const thread of messageThreads) {
        console.log(`\n=== Processing RootIndex ${i}, ThreadID ${thread.id} ===`);

        const phasesMap = detectConversationPhases(
          thread.messagesAndContents,
          checkinDate,
          checkoutDate
        );

        const groupedByPhase: Record<ConversationPhase, string[]> = {
          [ConversationPhase.INQUIRY]: [],
          [ConversationPhase.BOOKING_AND_PREARRIVAL]: [],
          [ConversationPhase.DURING_STAY]: [],
          [ConversationPhase.DEPARTURE]: [],
          [ConversationPhase.END_OF_THREAD]: [],
        };

        const sorted = [...thread.messagesAndContents].sort(
          (a, b) => a.message.createdAt.getTime() - b.message.createdAt.getTime()
        );

        for (const mc of sorted) {
          const msgId = mc.message.id;
          if (!msgId) continue;
          const phase = phasesMap[msgId];
          let bodyText = '';
          if (mc.messageContent?.textContent?.body) {
            bodyText = mc.messageContent.textContent.body;
          } else {
            bodyText = '[No textContent or unrecognized format]';
          }
          groupedByPhase[phase].push(`Msg#${msgId}: ${bodyText}`);
        }

        for (const phaseKey of Object.values(ConversationPhase)) {
          const lines = groupedByPhase[phaseKey];
          if (lines.length === 0) {
            continue;
          }
          const summary = await summarizePhase(phaseKey, lines);
          console.log('SUMMARY =>', summary);
        }
      }
    }
    res.status(200).json({ message: 'Processing complete' });
  } catch (err) {
    console.error('Error in handler:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

export default handler;