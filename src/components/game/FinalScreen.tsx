import { Users, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FinalScreenProps {
  theme: string;
  onRestart: () => void;
}

export function FinalScreen({ theme, onRestart }: FinalScreenProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 animate-fade-in">
      <div className="mb-8 p-6 rounded-full bg-secondary">
        <Users className="w-12 h-12 text-foreground" strokeWidth={1.5} />
      </div>
      
      <h2 className="text-4xl md:text-6xl font-bold text-center tracking-tight glow-white mb-4">
        Todos prontos!
      </h2>
      
      <p className="text-muted-foreground text-lg text-center max-w-md mb-2">
        Tema da rodada:
      </p>
      
      <p className="text-2xl font-semibold text-foreground mb-8">
        {theme}
      </p>
      
      <p className="text-muted-foreground text-base text-center max-w-md">
        Agora discutam e descubram quem é o{" "}
        <span className="text-impostor font-semibold">impostor</span>!
      </p>
      
      <Button
        onClick={onRestart}
        className="mt-12 gap-2"
        size="lg"
        variant="outline"
      >
        <RotateCcw className="w-5 h-5" />
        Nova Rodada
      </Button>
    </div>
  );
}