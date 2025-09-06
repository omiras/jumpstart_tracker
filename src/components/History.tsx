
"use client";

import { useMemo, useState, useEffect } from "react";
import { History as HistoryIcon, BarChart2, Shield, ShieldCheck, ShieldX } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import type { GameRecord, DeckCombinationStats } from "@/lib/types";

interface HistoryProps {
  history: GameRecord[];
  stats: DeckCombinationStats;
}

export default function History({ history, stats }: HistoryProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const rankings = useMemo(() => {
    return Object.entries(stats)
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
  }, [stats]);
  
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <HistoryIcon /> Game Archives
        </CardTitle>
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
                    <TableHead>Player 1 Decks</TableHead>
                    <TableHead>Player 2 Decks</TableHead>
                    <TableHead>Date</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {isClient && history.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={4} className="text-center text-muted-foreground">
                        No games played yet.
                      </TableCell>
                    </TableRow>
                  ) : !isClient ? (
                    <TableRow>
                      <TableCell colSpan={4} className="text-center text-muted-foreground">
                        Loading history...
                      </TableCell>
                    </TableRow>
                  ) : (
                    history.map((game) => (
                      <TableRow key={game.id}>
                        <TableCell>
                          <Badge variant={game.winner === 'player1' ? 'default' : 'secondary'}>
                            {game.winner === "player1" ? "Player 1" : "Player 2"}
                          </Badge>
                        </TableCell>
                        <TableCell>{game.player1Decks.deckA} + {game.player1Decks.deckB}</TableCell>
                        <TableCell>{game.player2Decks.deckA} + {game.player2Decks.deckB}</TableCell>
                        <TableCell>{new Date(game.date).toLocaleDateString()}</TableCell>
                      </TableRow>
                    ))
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
                    rankings.map((rank, index) => (
                      <TableRow key={rank.combination}>
                        <TableCell className="font-medium">{index + 1}</TableCell>
                        <TableCell>{rank.combination}</TableCell>
                        <TableCell className="text-center">
                          <Badge className="w-16 justify-center" style={{backgroundColor: `hsl(120, 60%, ${100-rank.winRate/2}%)`, color: rank.winRate > 50 ? 'black' : 'white'}}>
                              {rank.winRate.toFixed(0)}%
                          </Badge>
                        </TableCell>
                        <TableCell className="text-center flex items-center justify-center gap-1 text-green-500"><ShieldCheck className="h-4 w-4" />{rank.wins}</TableCell>
                        <TableCell className="text-center flex items-center justify-center gap-1 text-red-500"><ShieldX className="h-4 w-4" />{rank.losses}</TableCell>
                        <TableCell className="text-center flex items-center justify-center gap-1 text-blue-500"><Shield className="h-4 w-4" />{rank.totalGames}</TableCell>
                      </TableRow>
                    ))
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
