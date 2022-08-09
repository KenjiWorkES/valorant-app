import { Hero, Agents, GameModes } from "../components/organisms";
import { getAllAgents } from "../service/agents";
import { getAllGameModes } from "../service/modes";

const HomePage = ({ agents, gameModes }) => {
  console.log(gameModes);

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

  return {
    props: {
      agents: agents,
      gameModes: gameModes,
    },
  };
};

export default HomePage;
