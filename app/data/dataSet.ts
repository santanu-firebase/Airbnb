import { Activity, Bed, Binoculars, BookKey, Dot, MessageSquarePlus, PlaneTakeoff, Settings, Shield, SquareActivity, SquareAsterisk, Users, View } from "lucide-react";


export const dataSet = [
    {
        href: 'inquary', icon: View, label: 'Inquary', subItems: [
            {
                href: 'inquary_Patterns', icon: Dot, label: 'Inquiry Patterns', questions: [
                    {
                        question: 'what'
                    }

                ]
            },
            {
                href: 'pain_Points-Key_Factors', icon: Dot, label: 'Pain Points & Key Factors', questions: [
                    {
                        question: 'what',
                    }
                ]
            },
            {
                href: 'Abandonment-vs-Booking', icon: Dot, label: 'Abandonment vs. Booking', questions: [
                    {
                        question: 'where',
                    }
                ]
            },
            {
                href: 'Inquiry-to-Booking', icon: Dot, label: 'Inquiry to Booking', questions: [
                    {
                        question1: 'what',
                    }
                ]
            },
        ]
    },
    {
        href: 'booking', icon: BookKey, label: 'Booking', subItems: [
            {
                href: 'Booking_Confirmation', icon: Dot, label: 'Booking Confirmation & Pre-Arrival Coordination', questions: [
                    {
                        question: 'Which guest questions or concerns appear immediately after booking confirmation?'},
                        {
                        question: 'How often do guests request changes?'},
                        {question: 'What are the top “pain points” in the pre-arrival stage?'}
                    
                ]
            },
            {
                href: 'Response-Communication_Style', icon: Dot, label: 'Response & Communication Style', questions: [
                    {
                        question: 'Which pre-arrival communication styles lead to smoother check-in experiences?'},
                       { question: 'Are certain forms of host messaging more effective at reassuring guests?'},
                    
                ]
            },
            {
                href: 'Factors_Leading-to-Last-Minute_Cancellations', icon: Dot, label: 'Factors Leading to Last-Minute Cancellations', questions: [
                    {
                        question: 'What are the most common reasons for last-minute cancellations?'},
                        {question: 'How can hosts reduce the likelihood of last-minute cancellations?'
                    }
                ]
            },
            {
                href: 'Preparation-Efficiency', icon: Dot, label: 'Preparation Efficiency', questions: [
                    {
                        question: 'How can hosts improve the efficiency of pre-arrival preparations?'},
                       { question: 'What are the most common pre-arrival issues that hosts face?',
                    }
                ]
            },
        ]
    },
    {
        href: 'stay', icon: Bed, label: 'Stay', subItems: [
            {
                href: 'Maintenance-Issue_Resolution', icon: Dot, label: 'Maintenance & Issue Resolution', questions: [
                    {
                        question: 'What are the most common maintenance issues that guests encounter?'},
                        {question: 'How quickly do hosts respond to maintenance requests?'},
                       { question: 'How do maintenance issues impact guest satisfaction?'
                    }
                ]
            },
            {
                href: 'Guest_Experience-Satisfaction', icon: Dot, label: 'Guest Experience & Satisfaction', questions: [
                    {
                        question: 'what'
                    }
                ]
            },
            {
                href: 'Emergency-Situations', icon: Dot, label: 'Emergency Situations', questions: [
                    {
                        question: 'what'
                    }
                ]
            },
            {
                href: 'Predicting-High-Care-Guests', icon: Dot, label: 'Predicting High-Care Guests', qustions: [
                    {
                        question: 'what'
                    }
                ]
            },
        ]
    },
    {
        href: 'conversion', icon: MessageSquarePlus, label: 'Conversion', subItems: [
            {
                href: 'High-Value-Booking', icon: Dot, label: 'High-Value Booking', questions: [
                    {
                        question: 'what'
                    }
                ]
            },
            {
                href: 'Lifetime_Value-Repeat_Guests', icon: Dot, label: 'Lifetime Value & Repeat Guests', questions: [
                    {
                        question: 'what'
                    }
                ]
            },
            {
                href: 'Time-Efficiency', icon: Dot, label: 'Time Efficiency', questions: [
                    {
                        question: 'what'
                    }
                ]
            },
        ]
    },
    {
        href: 'departure', icon: PlaneTakeoff, label: 'Departure', subItems: [
            {
                href: 'Departure-Process', icon: Dot, label: 'Departure Process', questions: [
                    {
                        question: 'what'
                    }
                ]
            },
            {
                href: 'Review-Influences', icon: Dot, label: 'Review Influences', questions: [
                    {
                        question: 'what'
                    }
                ]
            },
            {
                href: 'Repeat-Bookings', icon: Dot, label: 'Repeat Bookings', questions: [
                    {
                        question: 'what'
                    }
                ]
            },
        ]
    },
    {
        href: 'operations', icon: SquareActivity, label: 'Operations', subItems: [
            {
                href: 'Response-Time-Metrics', icon: Dot, label: 'Response Time Metrics', questions: [
                    {
                        question: 'what'
                    }
                ]
            },
            {
                href: 'Conversation_Volume-Patterns', icon: Dot, label: 'Conversation Volume & Patterns', questions: [
                    {
                        question: 'what'
                    }
                ]
            },
            {
                href: 'Overall-Efficiency', icon: Dot, label: 'Overall Efficiency', questions: [
                    {
                        question: 'what'
                    }
                ]
            }
        ]
    },
    {
        href: 'outcome', icon: Binoculars, label: 'Outcome', subItems: [
            {
                href: '5-Star_Drivers', icon: Dot, label: '5-Star Drivers', questions: [
                    {
                        question: 'what'
                    }
                ]
            },
            {
                href: 'Non-5-Star_Drivers', icon: Dot, label: 'Non-5-Star Drivers', questions: [
                    {
                        question: 'what'
                    }
                ]
            },
            {
                href: 'Post-Stay_Follow-Up', icon: Dot, label: 'Post-Stay Follow-Up', questions: [
                    {
                        question: 'what'
                    }
                ]
            },
        ]
    },
    {
        href: 'priorities', icon: PlaneTakeoff, label: 'Priorities', subItems: [
            {
                href: 'Category-Analysis-of-Questions', icon: Dot, label: 'Category Analysis of Questions', questions: [
                    {
                        question: 'what'
                    }
                ]
            },
            {
                href: 'Host_Response_Time_Analysis', icon: Dot, label: 'Host Response Time Analysis', questions: [
                    {
                        question: 'what'
                    }
                ]
            },
            {
                href: 'Guest_Satisfaction_Analysis', icon: Dot, label: 'Guest Satisfaction Analysis', questions: [
                    {
                        question: 'what'
                    }
                ]
            },

        ]
    },
    {
        href: 'risk', icon: SquareAsterisk, label: 'Risk', subItems: [
            {
                href: 'Potential_Problem_Guest_Red_Flags', icon: Dot, label: 'Potential Problem Guest Red Flags', questions: [
                    {
                        question: 'what'
                    }
                ]
            },
            {
                href: 'Property_Care_Standards', icon: Dot, label: 'Property Care Standards', questions: [
                    {
                        question: 'what'
                    }
                ]
            },
            {
                href: 'Exceptional-Circumstances', icon: Dot, label: 'Exceptional Circumstances', questions: [
                    {
                        question: 'what'
                    }
                ]
            },

        ]
    },
    {
        href: 'automation', icon: MessageSquarePlus, label: 'Automation', subItems: [
            {
                href: 'Potential_for_Auto-Replies', icon: Dot, label: 'Potential for Auto-Replies', questions: [
                    {
                        question: 'what'
                    }
                ]
            },
            {
                href: 'Listing-Optimization', icon: Dot, label: 'Listing Optimization', questions: [
                    {
                        question: 'what'
                    }
                ]
            },
            {
                href: 'Business-Strategy', icon: Dot, label: 'Business Strategy', questions: [
                    {
                        question: 'what'
                    }
                ]
            },
        ]
    },
];