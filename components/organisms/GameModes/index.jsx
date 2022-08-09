import { MainButton } from "../../atoms";
import { GameModesGrid } from "../../molecules";

const GameModes = ({ items }) => {
  return (
    <section className="gameModes">
      <h2 className="sectionHeading sectionHeading--light">Modos de Jogos</h2>
      <GameModesGrid items={items} />
      <MainButton text="Ver todos os modos" />
    </section>
  );
};

export default GameModes;
