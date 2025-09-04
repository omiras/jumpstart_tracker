'use server';
/**
 * @fileOverview Provides Jumpstart deck recommendations based on play history and win rates using GenAI.
 *
 * - getJumpstartDeckRecommendations - A function that provides Jumpstart deck recommendations.
 * - GetJumpstartDeckRecommendationsInput - The input type for the getJumpstartDeckRecommendations function.
 * - GetJumpstartDeckRecommendationsOutput - The return type for the getJumpstartDeckRecommendations function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GetJumpstartDeckRecommendationsInputSchema = z.object({
  playHistory: z
    .string()
    .describe('A summary of the user play history, including deck combinations and win rates.'),
  numberOfRecommendations: z
    .number()
    .default(3)
    .describe('The number of deck recommendations to provide.'),
});
export type GetJumpstartDeckRecommendationsInput = z.infer<
  typeof GetJumpstartDeckRecommendationsInputSchema
>;

const GetJumpstartDeckRecommendationsOutputSchema = z.object({
  recommendations: z
    .array(z.string())
    .describe('An array of Jumpstart deck recommendations based on play history and win rates.'),
});
export type GetJumpstartDeckRecommendationsOutput = z.infer<
  typeof GetJumpstartDeckRecommendationsOutputSchema
>;

export async function getJumpstartDeckRecommendations(
  input: GetJumpstartDeckRecommendationsInput
): Promise<GetJumpstartDeckRecommendationsOutput> {
  return getJumpstartDeckRecommendationsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'getJumpstartDeckRecommendationsPrompt',
  input: {
    schema: GetJumpstartDeckRecommendationsInputSchema,
  },
  output: {
    schema: GetJumpstartDeckRecommendationsOutputSchema,
  },
  prompt: `You are an expert Magic: The Gathering deck advisor.

Based on the provided play history and win rates, recommend {{numberOfRecommendations}} Jumpstart deck combinations for the user.

Play History: {{{playHistory}}}

Recommendations:`,
});

const getJumpstartDeckRecommendationsFlow = ai.defineFlow(
  {
    name: 'getJumpstartDeckRecommendationsFlow',
    inputSchema: GetJumpstartDeckRecommendationsInputSchema,
    outputSchema: GetJumpstartDeckRecommendationsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
