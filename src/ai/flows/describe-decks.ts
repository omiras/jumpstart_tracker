'use server';
/**
 * @fileOverview Summarizes the general gameplan of a provided list of Jumpstart: Foundations decks.
 *
 * - describeDecks - A function that summarizes the gameplan of a given pair of decks.
 * - DescribeDecksInput - The input type for the describeDecks function.
 * - DescribeDecksOutput - The return type for the describeDecks function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const DescribeDecksInputSchema = z.object({
  deckOne: z.string().describe('The name of the first deck.'),
  deckTwo: z.string().describe('The name of the second deck.'),
});
export type DescribeDecksInput = z.infer<typeof DescribeDecksInputSchema>;

const DescribeDecksOutputSchema = z.object({
  strategySummary: z.string().describe('A summary of the strategy of the selected decks.'),
});
export type DescribeDecksOutput = z.infer<typeof DescribeDecksOutputSchema>;

export async function describeDecks(input: DescribeDecksInput): Promise<DescribeDecksOutput> {
  return describeDecksFlow(input);
}

const prompt = ai.definePrompt({
  name: 'describeDecksPrompt',
  input: {schema: DescribeDecksInputSchema},
  output: {schema: DescribeDecksOutputSchema},
  prompt: `You are an expert Magic: The Gathering deck strategist.

You will be given the names of two Jumpstart: Foundations decks. You will output a short summary of the general strategy that these two decks employ when combined.

Deck One: {{{deckOne}}}
Deck Two: {{{deckTwo}}}`,
});

const describeDecksFlow = ai.defineFlow(
  {
    name: 'describeDecksFlow',
    inputSchema: DescribeDecksInputSchema,
    outputSchema: DescribeDecksOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
