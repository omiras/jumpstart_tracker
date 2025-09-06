
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
import { Sun, Waves, Skull, Mountain, Leaf, WandSparkles, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "./ui/scroll-area";

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
        case 'Multicolored': return <WandSparkles {...iconProps} />;
        default: return null;
    }
};

const CardListDialog = ({ deckName, allDecks }: { deckName: string; allDecks: Deck[] }) => {
  const deck = allDecks.find(d => d.name === deckName);

  if (!deck) return null;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="sm" className="h-auto px-2 py-1">
          <Eye className="w-4 h-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>{deck.name}</DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-96">
            <ul className="space-y-1 text-sm text-muted-foreground list-disc list-inside">
                {deck.cards.map((card, index) => (
                    <li key={index}>{card}</li>
                ))}
            </ul>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
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
          <div className="flex items-center gap-2">
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
            {playerDecks.deckA && <CardListDialog deckName={playerDecks.deckA} allDecks={allDecks} />}
          </div>
        </div>
        <div>
          <label className="text-sm font-medium text-muted-foreground mb-2 block">
            Deck 2
          </label>
           <div className="flex items-center gap-2">
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
             {playerDecks.deckB && <CardListDialog deckName={playerDecks.deckB} allDecks={allDecks} />}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

