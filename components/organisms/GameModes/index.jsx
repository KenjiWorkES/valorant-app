import { MainButton } from "../../atoms";
import { GameModesGrid } from "../../molecules";

import { useRouter } from "next/router";

const GameModes = ({ items }) => {
  const router = useRouter();

  const navigateReadMore = () => {
    router.push("/modos-de-jogo");
  };

  return (
    <section className="gameModes">
      <div className="gameModes__container">
        <h2 className="sectionHeading sectionHeading--light gameModes__title">
          Modos de Jogos
        </h2>
        <GameModesGrid items={items} />
        <MainButton
          className="button--outlineWhite gameModes__button "
          text="Ver todos os modos"
          onClick={navigateReadMore}
        />
      </div>
    </section>
  );
};

export default GameModes;
