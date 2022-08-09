import { Hero, Agents, GameModes, HomeMaps } from "../components/organisms";
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
      <HomeMaps items={maps.data} />
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
