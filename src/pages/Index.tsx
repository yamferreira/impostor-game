import { Game } from "@/components/game/Game";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Adivinha o Impostor - Jogo de Festa</title>
        <meta name="description" content="Jogo de festa para 4 jogadores. Descubra quem é o impostor que não conhece a palavra secreta!" />
      </Helmet>
      <Game />
    </>
  );
};

export default Index;