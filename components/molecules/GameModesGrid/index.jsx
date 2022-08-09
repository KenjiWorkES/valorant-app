import { GameModesItem } from "../../atoms";

const GameModesGrid = ({ items }) => {
  const slicedGameModes = items.slice(0, 4);

  return (
    <ul className="gameModes__grid">
      {slicedGameModes.map((gameMode) => (
        <GameModesItem
          key={gameMode.uuid}
          image={gameMode.displayIcon}
          text={gameMode.displayName}
        />
      ))}
    </ul>
  );
};

export default GameModesGrid;
