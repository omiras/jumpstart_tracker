
"use server";

import { generateDeckList } from "@/ai/flows/generate-deck-list";
import type { Deck } from "@/lib/types";

// URL for Jumpstart: Foundations decklists.
const DECKLIST_URL = "https://mtg.fandom.com/wiki/Jumpstart/Foundations_decklists";

/**
 * Fetches and parses Jumpstart deck lists using a GenAI-powered web scraper.
 * @returns A promise that resolves to an array of Deck objects.
 */
export async function getDecks(): Promise<Deck[]> {
  try {
    const result = await generateDeckList({ url: DECKLIST_URL });
    if (result.deckListJson) {
      const parsedDecks = JSON.parse(result.deckListJson);
      // Basic validation to ensure the parsed data is an array
      if (Array.isArray(parsedDecks)) {
        return parsedDecks.sort((a, b) => a.name.localeCompare(b.name));
      }
    }
    return [];
  } catch (error) {
    console.error("Failed to generate or parse deck list:", error);
    // In a real-world app, you might want to have a static fallback list.
    return [];
  }
}
