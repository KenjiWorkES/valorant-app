import { GameModesItem } from "../../atoms";

const GameModesGrid = ({ items }) => {
  const slicedGameModes = items.slice(0, 5);
  slicedGameModes.splice(3, 1);

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
