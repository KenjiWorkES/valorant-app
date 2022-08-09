import { Hero, Agents, GameModes, HomeMaps } from "../components/organisms";
import { getAllAgents } from "../service/agents";
import { getAllGameModes } from "../service/modes";
import { getAllMaps } from "../service/maps";
import { getAllRanks } from "../service/ranks";

const HomePage = ({ agents, gameModes, maps, ranks }) => {
  console.log(ranks);

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

  const ranks = await getAllRanks();

  return {
    props: {
      agents: agents,
      gameModes: gameModes,
      maps: maps,
      ranks: ranks,
    },
  };
};

export default HomePage;
