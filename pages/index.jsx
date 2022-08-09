import { Hero, Agents, GameModes } from "../components/organisms";
import { getAllAgents } from "../service/agents";
import { getAllGameModes } from "../service/modes";
import { getAllMaps } from "../service/maps";

const HomePage = ({ agents, gameModes, maps }) => {
  console.log(maps);

  return (
    <>
      <Hero />
      <Agents items={agents.data} />
      <GameModes items={gameModes.data} />
    </>
  );
};

export const getStaticProps = async () => {
  const agents = await getAllAgents();

  const gameModes = await getAllGameModes();

  const maps = await getAllMaps();

  return {
    props: {
      agents: agents,
      gameModes: gameModes,
      maps: maps,
    },
  };
};

export default HomePage;
