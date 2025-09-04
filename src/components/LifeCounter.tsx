
"use client";

import { Heart, Minus, Plus, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import type { PlayerDecks } from "@/lib/types";

interface LifeCounterProps {
  playerName: string;
  decks: PlayerDecks;
  life: number;
  onLifeChange: (newLife: number) => void;
  onDeclareWinner: () => void;
}

export default function LifeCounter({
  playerName,
  decks,
  life,
  onLifeChange,
  onDeclareWinner,
}: LifeCounterProps) {
  return (
    <Card className="text-center shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl">{playerName}</CardTitle>
        <CardDescription>{decks.deckA} + {decks.deckB}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-center space-x-4">
          <Button variant="outline" size="icon" onClick={() => onLifeChange(life - 1)}>
            <Minus className="h-4 w-4" />
          </Button>
          <div className="flex items-center text-6xl font-bold">
            <Heart className="h-12 w-12 text-red-500 mr-2 fill-current" />
            <span>{life}</span>
          </div>
          <Button variant="outline" size="icon" onClick={() => onLifeChange(life + 1)}>
            <Plus className="h-4 w-4" />
          </Button>
        </div>
        <Button onClick={onDeclareWinner} variant="destructive" className="w-full">
          <Crown className="mr-2 h-4 w-4" />
          Declare Winner
        </Button>
      </CardContent>
    </Card>
  );
}
