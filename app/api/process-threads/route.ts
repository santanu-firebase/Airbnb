import { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';
import fs from 'fs';
import dayjs from 'dayjs';
import { RootSchema, detectConversationPhases, summarizePhase, ConversationPhase } from '../../../app';


// Function to check if the provided object is a NextApiResponse instance
function isNextApiResponse(obj: any): obj is NextApiResponse {
  return typeof obj.status === 'function' && typeof obj.json === 'function';
}

export async function GET(res: NextApiResponse) {
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
            bodyText = 'END OF THREAD';
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
          return summary;
        }
      }
    }

    if (isNextApiResponse(res)) {
      res.status(200).json({ message: 'Processing complete' });
    } else {
      console.error('Unexpected response object type');
    }
  } catch (err) {
    console.error('Error in handler:', err);
    if (isNextApiResponse(res)) {
      res.status(500).json({ error: err });
    }
  }
}