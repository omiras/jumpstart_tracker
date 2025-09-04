
"use server";

import type { Deck } from "@/lib/types";

// Hardcoded list of Jumpstart: Foundations decks for reliability.
const allDecks: Deck[] = [
  // White
  { name: "Angels", color: "White", set: "Foundations" },
  { name: "Coalition", color: "White", set: "Foundations" },
  { name: "Dogs", color: "White", set: "Foundations" },
  { name: "Knights", color: "White", set: "Foundations" },
  { name: "Phyrexians", color: "White", set: "Foundations" },
  // Blue
  { name: "Detectives", color: "Blue", set: "Foundations" },
  { name: "Pirates", color: "Blue", set: "Foundations" },
  { name: "Wizards", color: "Blue", set: "Foundations" },
  { name: "Fliers", color: "Blue", set: "Foundations" },
  { name: "Merfolk", color: "Blue", set: "Foundations" },
  // Black
  { name: "Demons", color: "Black", set: "Foundations" },
  { name: "Goblins", color: "Black", set: "Foundations" },
  { name: "Zombies", color: "Black", set: "Foundations" },
  { name: "Rats", color: "Black", set: "Foundations" },
  { name: "Vampires", color: "Black", set: "Foundations" },
  // Red
  { name: "Dragons", color: "Red", set: "Foundations" },
  { name: "Fiery", color: "Red", set: "Foundations" },
  { name: "Minotaurs", color: "Red", set: "Foundations" },
  { name: "Monks", color: "Red", set: "Foundations" },
  { name: "Slivers", color: "Red", set: "Foundations" },
  // Green
  { name: "Dinosaurs", color: "Green", set: "Foundations" },
  { name: "Druids", color: "Green", set: "Foundations" },
  { name: "Elves", color: "Green", set: "Foundations" },
  { name: "Insects", color: "Green", set: "Foundations" },
  { name: "Wurms", color: "Green", set: "Foundations" },
];


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
