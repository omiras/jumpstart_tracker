
"use client";

import { useState, useEffect, useMemo } from "react";
import { Crown, Swords, Loader2, Wand2 } from "lucide-react";
import { getDecks } from "@/lib/actions";
import type { Deck, GameRecord, DeckCombinationStats, PlayerDecks } from "@/lib/types";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import DeckSelector from "@/components/DeckSelector";
import LifeCounter from "@/components/LifeCounter";
import History from "@/components/History";
import { useToast } from "@/hooks/use-toast";
import { describeDecks } from "@/ai/flows/describe-decks";

type GameState = "setup" | "active" | "over";

export default function GameTracker() {
  const [allDecks, setAllDecks] = useState<Deck[]>([]);
  const [isLoadingDecks, setIsLoadingDecks] = useState(true);
  const [isLoadingStrategy, setIsLoadingStrategy] = useState(false);
  
  const [player1Decks, setPlayer1Decks] = useState<PlayerDecks>({ deckA: "", deckB: "" });
  const [player2Decks, setPlayer2Decks] = useState<PlayerDecks>({ deckA: "", deckB: "" });
  
  const [player1Life, setPlayer1Life] = useState(20);
  const [player2Life, setPlayer2Life] = useState(20);

  const [gameState, setGameState] = useState<GameState>("setup");
  const [strategy, setStrategy] = useState("");

  const [gameHistory, setGameHistory] = useLocalStorage<GameRecord[]>("gameHistory", []);
  const [deckStats, setDeckStats] = useLocalStorage<DeckCombinationStats>("deckStats", {});

  const { toast } = useToast();

  useEffect(() => {
    const fetchDecks = async () => {
      try {
        setIsLoadingDecks(true);
        const decks = await getDecks();
        setAllDecks(decks);
        if (decks.length === 0) {
          toast({
            variant: "destructive",
            title: "Error fetching decks",
            description: "Could not load deck lists. Please try again later.",
          });
        }
      } catch (error) {
        console.error(error);
        toast({
          variant: "destructive",
          title: "Error",
          description: "An unexpected error occurred while fetching decks.",
        });
      } finally {
        setIsLoadingDecks(false);
      }
    };
    fetchDecks();
  }, [toast]);
  
  const selectedDecks = useMemo(() => [
    player1Decks.deckA, player1Decks.deckB,
    player2Decks.deckA, player2Decks.deckB
  ].filter(Boolean), [player1Decks, player2Decks]);

  const handleStartGame = async () => {
    if (selectedDecks.length !== 4) {
      toast({
        variant: "destructive",
        title: "Incomplete Selection",
        description: "Both players must select two decks.",
      });
      return;
    }
    setPlayer1Life(20);
    setPlayer2Life(20);
    setGameState("active");
    setStrategy("");

    try {
        setIsLoadingStrategy(true);
        const p1Description = await describeDecks({deckOne: player1Decks.deckA, deckTwo: player1Decks.deckB});
        const p2Description = await describeDecks({deckOne: player2Decks.deckA, deckTwo: player2Decks.deckB});
        setStrategy(`Player 1 (${player1Decks.deckA} & ${player1Decks.deckB}): ${p1Description.strategySummary}\n\nPlayer 2 (${player2Decks.deckA} & ${player2Decks.deckB}): ${p2Description.strategySummary}`);
    } catch (e) {
        console.error(e);
        toast({
            variant: "destructive",
            title: "AI Error",
            description: "Could not generate deck strategies.",
        });
    } finally {
        setIsLoadingStrategy(false);
    }
  };

  const handleWin = (winner: "player1" | "player2") => {
    const newGameRecord: GameRecord = {
      id: new Date().toISOString(),
      player1Decks,
      player2Decks,
      winner,
      date: new Date().toISOString(),
    };

    setGameHistory([newGameRecord, ...gameHistory]);

    const updateStats = (decks: PlayerDecks, isWinner: boolean) => {
      const key = [decks.deckA, decks.deckB].sort().join(" + ");
      setDeckStats(prev => {
        const newStats = { ...prev };
        if (!newStats[key]) {
          newStats[key] = { wins: 0, losses: 0 };
        }
        if (isWinner) {
          newStats[key].wins++;
        } else {
          newStats[key].losses++;
        }
        return newStats;
      });
    };
    
    updateStats(player1Decks, winner === "player1");
    updateStats(player2Decks, winner === "player2");

    setGameState("over");
  };

  const handleNewGame = () => {
    setPlayer1Decks({ deckA: "", deckB: "" });
    setPlayer2Decks({ deckA: "", deckB: "" });
    setGameState("setup");
    setStrategy("");
  };
  
  return (
    <div className="space-y-8">
      <header className="text-center">
        <h1 className="text-5xl font-bold text-primary flex items-center justify-center gap-4">
          <Wand2 className="w-12 h-12" /> Jumpstart Tracker
        </h1>
        <p className="text-muted-foreground mt-2">
          Track your Magic: The Gathering Jumpstart battles and stats.
        </p>
      </header>
      
      {gameState === "setup" && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Swords /> New Game Setup
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {isLoadingDecks ? (
              <div className="flex items-center justify-center gap-2 text-muted-foreground h-40">
                <Loader2 className="h-5 w-5 animate-spin" />
                <span>Loading deck lists...</span>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <DeckSelector
                    title="Player 1 Decks"
                    allDecks={allDecks}
                    selectedDecks={selectedDecks}
                    playerDecks={player1Decks}
                    onDeckChange={setPlayer1Decks}
                  />
                  <DeckSelector
                    title="Player 2 Decks"
                    allDecks={allDecks}
                    selectedDecks={selectedDecks}
                    playerDecks={player2Decks}
                    onDeckChange={setPlayer2Decks}
                  />
                </div>
                <div className="flex justify-center">
                  <Button size="lg" onClick={handleStartGame}>
                    <Swords className="mr-2 h-5 w-5" /> Start Game
                  </Button>
                </div>
              </>
            )}
          </CardContent>
        </Card>
      )}

      {gameState === "active" && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 justify-center text-3xl">
              <Swords /> Match in Progress
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              <LifeCounter
                playerName="Player 1"
                decks={player1Decks}
                life={player1Life}
                onLifeChange={setPlayer1Life}
                onDeclareWinner={() => handleWin("player1")}
              />
              <LifeCounter
                playerName="Player 2"
                decks={player2Decks}
                life={player2Life}
                onLifeChange={setPlayer2Life}
                onDeclareWinner={() => handleWin("player2")}
              />
            </div>
            {isLoadingStrategy && (
                <div className="flex items-center justify-center gap-2 text-muted-foreground pt-4">
                    <Loader2 className="h-5 w-5 animate-spin" />
                    <span>Generating AI strategy tips...</span>
                </div>
            )}
            {strategy && (
                <Card className="bg-secondary/50">
                    <CardHeader><CardTitle className="text-lg">AI Strategy Guide</CardTitle></CardHeader>
                    <CardContent>
                        <p className="whitespace-pre-wrap text-sm text-muted-foreground">{strategy}</p>
                    </CardContent>
                </Card>
            )}
          </CardContent>
        </Card>
      )}
      
      {gameState === "over" && (
         <Card className="text-center">
            <CardHeader>
                <CardTitle className="text-3xl flex items-center justify-center gap-3">
                    <Crown className="w-8 h-8 text-yellow-400"/>
                    Game Over
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                 <p className="text-xl">Congratulations to the winner!</p>
                 <Button onClick={handleNewGame} size="lg">
                    <Swords className="mr-2 h-4 w-4" /> Start a New Game
                </Button>
            </CardContent>
        </Card>
      )}

      <Separator />

      <History history={gameHistory} stats={deckStats} />

    </div>
  );
}
