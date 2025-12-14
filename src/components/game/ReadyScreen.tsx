import { User } from "lucide-react";

interface ReadyScreenProps {
  playerNumber: number;
  onReady: () => void;
}

export function ReadyScreen({ playerNumber, onReady }: ReadyScreenProps) {
  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center p-8 cursor-pointer animate-fade-in"
      onClick={onReady}
    >
      <div className="mb-8 p-6 rounded-full bg-secondary">
        <User className="w-12 h-12 text-foreground" strokeWidth={1.5} />
      </div>
      
      <p className="text-muted-foreground text-lg mb-4">Prepare-se</p>
      
      <h2 className="text-5xl md:text-7xl font-bold text-center tracking-tight glow-white">
        Jogador {playerNumber}
      </h2>
      
      <p className="text-muted-foreground text-base mt-8 text-center max-w-xs">
        Certifique-se de que só você está vendo a tela
      </p>
      
      <div className="mt-16 text-muted-foreground text-sm animate-pulse-subtle">
        Toque para revelar
      </div>
    </div>
  );
}
