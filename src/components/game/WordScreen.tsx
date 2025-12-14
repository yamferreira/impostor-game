import { AlertTriangle } from "lucide-react";

interface WordScreenProps {
  isImpostor: boolean;
  word: string;
  hint: string;
  playerNumber: number;
  onNext: () => void;
}

export function WordScreen({ isImpostor, word, hint, playerNumber, onNext }: WordScreenProps) {
  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center p-8 cursor-pointer animate-fade-in"
      onClick={onNext}
    >
      <p className="text-muted-foreground text-sm mb-2">
        Jogador {playerNumber}
      </p>
      
      {isImpostor ? (
        <>
          <div className="mb-6 p-4 rounded-full bg-accent/10">
            <AlertTriangle className="w-10 h-10 text-impostor" strokeWidth={1.5} />
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold text-center tracking-tight text-impostor glow-impostor">
            IMPOSTOR
          </h2>
          
          <p className="text-muted-foreground text-xs mt-12 text-center max-w-xs opacity-60">
            Dica: {hint}
          </p>
        </>
      ) : (
        <>
          <h2 className="text-5xl md:text-7xl font-bold text-center tracking-tight glow-white mt-8">
            {word}
          </h2>
        </>
      )}
      
      <div className="mt-16 text-muted-foreground text-sm animate-pulse-subtle">
        Toque para continuar
      </div>
    </div>
  );
}