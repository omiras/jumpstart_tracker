
"use server";

import type { Deck } from "@/lib/types";
import { allDecks } from "@/lib/decks";


/**
 * Fetches and parses Jumpstart deck lists.
 * @returns A promise that resolves to an array of Deck objects.
 */
export async function getDecks(): Promise<Deck[]> {
  try {
    // Basic validation to ensure the parsed data is an array
    if (Array.isArray(allDecks)) {
      return allDecks.sort((a, b) => a.name.localeCompare(b.name));
    }
    return [];
  } catch (error) {
    console.error("Failed to get deck list:", error);
    // In a real-world app, you might want to have a static fallback list.
    return [];
  }
}

