import { GameModesGrid } from "../../molecules";

const GameModesFull = ({ items, isFull }) => {
  if (isFull) {
    return (
      <section className="gameModes gameModes--light">
        <div className="gameModes__container">
          <h2 className="sectionHeading gameModes__title">Modos de Jogos</h2>
          <GameModesGrid isFull={true} items={items} />
        </div>
      </section>
    );
  }

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
