import { GameModesItem } from "../../atoms";

const GameModesGrid = ({ items, isFull }) => {
  let slicedGameModes;
  if (isFull) {
    slicedGameModes = items;
  } else {
    slicedGameModes = items.slice(0, 5);
    slicedGameModes.splice(3, 1);
  }

  return (
    <ul
      className={"gameModes__grid " + (isFull ? "gameModes__grid--full" : "")}
    >
      {slicedGameModes.map((gameMode) => (
        <GameModesItem
          color={isFull ? "red" : null}
          key={gameMode.uuid}
          image={gameMode.displayIcon}
          text={gameMode.displayName}
          hasTime={isFull ? true : false}
          time={gameMode.duration}
        />
      ))}
    </ul>
  );
};

export default GameModesGrid;
