
"use client";

import { useMemo, useState, useEffect } from "react";
import { History as HistoryIcon, BarChart2, Shield, ShieldCheck, ShieldX, Trash2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import type { GameRecord, DeckCombinationStats } from "@/lib/types";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

interface HistoryProps {
  history: GameRecord[];
  stats: DeckCombinationStats;
  onClearHistory: () => void;
}

export default function History({ history, stats, onClearHistory }: HistoryProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const rankings = useMemo(() => {
    if (!isClient) return [];
    // Show all combinations with at least one game played (wins OR losses)
    return Object.entries(stats)
      .filter(([_, data]) => (data.wins + data.losses) > 0)
      .map(([combination, data]) => {
        const totalGames = data.wins + data.losses;
        const winRate = totalGames > 0 ? (data.wins / totalGames) * 100 : 0;
        return {
          combination,
          ...data,
          totalGames,
          winRate,
        };
      })
      .sort((a, b) => b.winRate - a.winRate || b.totalGames - a.totalGames);
  }, [stats, isClient]);
  
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="flex items-center gap-2">
            <HistoryIcon /> Game Archives
          </CardTitle>
          {isClient && history.length > 0 && (
             <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="destructive" size="sm">
                    <Trash2 className="mr-2 h-4 w-4" />
                    Clear All Data
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                      This action cannot be undone. This will permanently delete all your game history and deck statistics.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={onClearHistory}>Continue</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="log">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="log">
              <HistoryIcon className="mr-2 h-4 w-4" /> Game Log
            </TabsTrigger>
            <TabsTrigger value="rankings">
              <BarChart2 className="mr-2 h-4 w-4" /> Deck Rankings
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="log" className="mt-4">
            <div className="max-h-[400px] overflow-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Winner</TableHead>
                    <TableHead>Loser</TableHead>
                    <TableHead>Date</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {isClient && history.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={3} className="text-center text-muted-foreground">
                        No games played yet.
                      </TableCell>
                    </TableRow>
                  ) : !isClient ? (
                    <TableRow>
                      <TableCell colSpan={3} className="text-center text-muted-foreground">
                        Loading history...
                      </TableCell>
                    </TableRow>
                  ) : (
                    history.map((game) => {
                        const winnerDecks = game.winner === 'player1' ? game.player1Decks : game.player2Decks;
                        const loserDecks = game.winner === 'player1' ? game.player2Decks : game.player1Decks;
                        return (
                            <TableRow key={game.id}>
                                <TableCell>
                                <Badge variant={game.winner === 'player1' ? 'default' : 'secondary'} className="mb-1">
                                    {game.winner === "player1" ? "Player 1" : "Player 2"}
                                </Badge>
                                <div className="text-xs text-muted-foreground">
                                    {winnerDecks.deckA} + {winnerDecks.deckB}
                                </div>
                                </TableCell>
                                <TableCell>
                                <Badge variant="outline" className="mb-1">
                                    {game.winner === "player1" ? "Player 2" : "Player 1"}
                                </Badge>
                                <div className="text-xs text-muted-foreground">
                                    {loserDecks.deckA} + {loserDecks.deckB}
                                </div>
                                </TableCell>
                                <TableCell>{new Date(game.date).toLocaleDateString()}</TableCell>
                            </TableRow>
                        )
                    })
                  )}
                </TableBody>
              </Table>
            </div>
          </TabsContent>

          <TabsContent value="rankings" className="mt-4">
             <div className="max-h-[400px] overflow-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Rank</TableHead>
                    <TableHead>Deck Combination</TableHead>
                    <TableHead className="text-center">Win %</TableHead>
                    <TableHead className="text-center">Wins</TableHead>
                    <TableHead className="text-center">Losses</TableHead>
                    <TableHead className="text-center">Total</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {isClient && rankings.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={6} className="text-center text-muted-foreground">
                        Play some games to see rankings.
                      </TableCell>
                    </TableRow>
                  ) : !isClient ? (
                     <TableRow>
                        <TableCell colSpan={6} className="text-center text-muted-foreground">
                          Loading rankings...
                        </TableCell>
                      </TableRow>
                  ) : (
                    rankings.map((rank, index) => {
                      const lightness = Math.round(100 - rank.winRate / 2);
                      const textColor = lightness > 60 ? 'black' : 'white';
                      return (
                        <TableRow key={rank.combination}>
                          <TableCell className="font-medium">{index + 1}</TableCell>
                          <TableCell>{rank.combination}</TableCell>
                          <TableCell className="text-center">
                            <Badge className="w-16 justify-center" style={{ backgroundColor: `hsl(120, 60%, ${lightness}%)`, color: textColor }}>
                              {rank.winRate.toFixed(0)}%
                            </Badge>
                          </TableCell>
                          <TableCell className="text-center">
                            <div className="flex items-center justify-center gap-1 text-green-500">
                              <ShieldCheck className="h-4 w-4" />{rank.wins}
                            </div>
                          </TableCell>
                          <TableCell className="text-center">
                            <div className="flex items-center justify-center gap-1 text-red-500">
                              <ShieldX className="h-4 w-4" />{rank.losses}
                            </div>
                          </TableCell>
                          <TableCell className="text-center">
                            <div className="flex items-center justify-center gap-1 text-blue-500">
                              <Shield className="h-4 w-4" />{rank.totalGames}
                            </div>
                          </TableCell>
                        </TableRow>
                      );
                    })
                  )}
                </TableBody>
              </Table>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
