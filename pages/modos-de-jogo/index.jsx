import { GameModesFull } from "../../components/organisms";
import { getAllGameModes } from "../../service/modes";

const GameModesPage = ({ gameModes }) => {
  return <GameModesFull items={gameModes.data} />;
};

export const getStaticProps = async () => {
  const gameModes = await getAllGameModes();

  return {
    props: {
      gameModes: gameModes,
    },
  };
};

export default GameModesPage;
