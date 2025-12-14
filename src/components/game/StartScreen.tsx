import { Eye } from "lucide-react";

interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center p-8 cursor-pointer animate-fade-in"
      onClick={onStart}
    >
      <div className="animate-float mb-8">
        <Eye className="w-20 h-20 text-foreground opacity-80" strokeWidth={1.5} />
      </div>
      
      <h1 className="text-5xl md:text-7xl font-bold text-center mb-4 tracking-tight glow-white">
        Adivinha o
        <br />
        <span className="text-impostor glow-impostor">Impostor</span>
      </h1>
      
      <p className="text-muted-foreground text-lg md:text-xl mt-8 text-center max-w-md">
        4 jogadores. 1 impostor.
        <br />
        Quem não conhece a palavra?
      </p>
      
      <div className="mt-16 text-muted-foreground text-sm animate-pulse-subtle">
        Toque para começar
      </div>
    </div>
  );
}
