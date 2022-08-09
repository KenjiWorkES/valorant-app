import { MainButton } from "../../atoms";
import { GameModesGrid } from "../../molecules";

const GameModes = ({ items }) => {
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
        />
      </div>
    </section>
  );
};

export default GameModes;
