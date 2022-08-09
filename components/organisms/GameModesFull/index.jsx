import { GameModesGrid } from "../../molecules";

const GameModesFull = ({ items }) => {
  return (
    <section className="gameModes">
      <div className="gameModes__container">
        <h2 className="sectionHeading sectionHeading--light gameModes__title">
          Modos de Jogos
        </h2>
        <GameModesGrid items={items} />
      </div>
    </section>
  );
};

export default GameModesFull;
