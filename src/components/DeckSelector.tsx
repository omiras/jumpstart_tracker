
"use client";

import type { Dispatch, SetStateAction } from "react";
import type { Deck, PlayerDecks, ManaColor } from "@/lib/types";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sun, Waves, Skull, Mountain, Leaf } from "lucide-react";

interface DeckSelectorProps {
  title: string;
  allDecks: Deck[];
  selectedDecks: string[];
  playerDecks: PlayerDecks;
  onDeckChange: Dispatch<SetStateAction<PlayerDecks>>;
}

const ManaIcon = ({ color }: { color: ManaColor }) => {
    const iconProps = { className: "w-4 h-4 text-muted-foreground" };
    switch (color) {
        case 'White': return <Sun {...iconProps} />;
        case 'Blue': return <Waves {...iconProps} />;
        case 'Black': return <Skull {...iconProps} />;
        case 'Red': return <Mountain {...iconProps} />;
        case 'Green': return <Leaf {...iconProps} />;
        default: return null;
    }
};

export default function DeckSelector({
  title,
  allDecks,
  selectedDecks,
  playerDecks,
  onDeckChange,
}: DeckSelectorProps) {

  const getAvailableDecks = (currentSelection: string) => {
    return allDecks.filter(
      (deck) => !selectedDecks.includes(deck.name) || deck.name === currentSelection
    );
  };

  return (
    <Card className="bg-card/50">
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <label className="text-sm font-medium text-muted-foreground mb-2 block">
            Deck 1
          </label>
          <Select
            value={playerDecks.deckA}
            onValueChange={(value) => onDeckChange(prev => ({...prev, deckA: value}))}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select first deck" />
            </SelectTrigger>
            <SelectContent>
              {getAvailableDecks(playerDecks.deckA).map((deck) => (
                <SelectItem key={deck.name} value={deck.name}>
                  <div className="flex items-center gap-2">
                    <ManaIcon color={deck.color} />
                    <span>{deck.name}</span>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <label className="text-sm font-medium text-muted-foreground mb-2 block">
            Deck 2
          </label>
          <Select
            value={playerDecks.deckB}
            onValueChange={(value) => onDeckChange(prev => ({...prev, deckB: value}))}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select second deck" />
            </SelectTrigger>
            <SelectContent>
              {getAvailableDecks(playerDecks.deckB).map((deck) => (
                <SelectItem key={deck.name} value={deck.name}>
                  <div className="flex items-center gap-2">
                    <ManaIcon color={deck.color} />
                    <span>{deck.name}</span>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </CardContent>
    </Card>
  );
}
