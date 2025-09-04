import { config } from 'dotenv';
config();

import '@/ai/flows/generate-deck-list.ts';
import '@/ai/flows/get-jumpstart-deck-recommendations.ts';
import '@/ai/flows/describe-decks.ts';