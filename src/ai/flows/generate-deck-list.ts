'use server';

/**
 * @fileOverview Automatically pulls Jumpstart: Foundations deck lists from a specified webpage using an AI-powered web scraper tool.
 *
 * - generateDeckList - A function that handles the web scraping and deck list generation.
 * - GenerateDeckListInput - The input type for the generateDeckList function.
 * - GenerateDeckListOutput - The return type for the generateDeckList function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateDeckListInputSchema = z.object({
  url: z
    .string()
    .describe('The URL of the webpage to scrape for Jumpstart: Foundations deck lists.'),
});
export type GenerateDeckListInput = z.infer<typeof GenerateDeckListInputSchema>;

const GenerateDeckListOutputSchema = z.object({
  deckListJson: z
    .string()
    .describe('A JSON string containing the scraped deck lists.'),
});
export type GenerateDeckListOutput = z.infer<typeof GenerateDeckListOutputSchema>;

export async function generateDeckList(input: GenerateDeckListInput): Promise<GenerateDeckListOutput> {
  return generateDeckListFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateDeckListPrompt',
  input: {schema: GenerateDeckListInputSchema},
  output: {schema: GenerateDeckListOutputSchema},
  prompt: `You are an expert web scraper and data formatter.

  You will scrape Jumpstart: Foundations deck lists from the provided URL. Extract all deck names and card details and output them as a JSON string.

  The JSON should be an array of objects, where each object represents a deck and has 'name' and 'cards' properties. The 'cards' property should be an array of strings.

  URL: {{{url}}}`,
});

const generateDeckListFlow = ai.defineFlow(
  {
    name: 'generateDeckListFlow',
    inputSchema: GenerateDeckListInputSchema,
    outputSchema: GenerateDeckListOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
