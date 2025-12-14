import { useState, useEffect, useCallback } from "react";
import { StartScreen } from "./StartScreen";
import { ReadyScreen } from "./ReadyScreen";
import { WordScreen } from "./WordScreen";
import { FinalScreen } from "./FinalScreen";
import { getRandomTheme, getRandomWord, getRandomImpostor, Theme } from "@/data/gameData";

type GamePhase = "start" | "ready" | "reveal" | "final";

const TOTAL_PLAYERS = 4;

export function Game() {
  const [phase, setPhase] = useState<GamePhase>("start");
  const [currentPlayer, setCurrentPlayer] = useState(0);
  const [theme, setTheme] = useState<Theme | null>(null);
  const [word, setWord] = useState("");
  const [impostorIndex, setImpostorIndex] = useState(0);

  const initializeGame = useCallback(() => {
    const selectedTheme = getRandomTheme();
    const selectedWord = getRandomWord(selectedTheme);
    const selectedImpostor = getRandomImpostor(TOTAL_PLAYERS);
    
    setTheme(selectedTheme);
    setWord(selectedWord);
    setImpostorIndex(selectedImpostor);
    setCurrentPlayer(0);
    setPhase("ready");
  }, []);

  const handleStart = () => {
    initializeGame();
  };

  const handleReady = () => {
    setPhase("reveal");
  };

  const handleNext = () => {
    if (currentPlayer < TOTAL_PLAYERS - 1) {
      setCurrentPlayer(prev => prev + 1);
      setPhase("ready");
    } else {
      setPhase("final");
    }
  };

  const handleRestart = () => {
    setPhase("start");
    setCurrentPlayer(0);
    setTheme(null);
    setWord("");
    setImpostorIndex(0);
  };

  // Keyboard support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === "Space" || e.code === "Enter") {
        e.preventDefault();
        switch (phase) {
          case "start":
            handleStart();
            break;
          case "ready":
            handleReady();
            break;
          case "reveal":
            handleNext();
            break;
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [phase, currentPlayer]);

  return (
    <main className="min-h-screen bg-background select-none">
      {phase === "start" && (
        <StartScreen onStart={handleStart} />
      )}
      
      {phase === "ready" && (
        <ReadyScreen 
          playerNumber={currentPlayer + 1} 
          onReady={handleReady} 
        />
      )}
      
      {phase === "reveal" && theme && (
        <WordScreen
          isImpostor={currentPlayer === impostorIndex}
          word={word}
          hint={theme.hint}
          playerNumber={currentPlayer + 1}
          onNext={handleNext}
        />
      )}
      
      {phase === "final" && theme && (
        <FinalScreen 
          theme={theme.name} 
          onRestart={handleRestart} 
        />
      )}
    </main>
  );
}