import { Hero, Agents } from "../components/organisms";
import { getAllAgents } from "../service/agents";

const HomePage = ({ agents }) => {
  console.log(agents);

  return (
    <>
      <Hero />
      <Agents items={agents.data} />
    </>
  );
};

export const getStaticProps = async () => {
  const agents = await getAllAgents();

  return {
    props: {
      agents: agents,
    },
  };
};

export default HomePage;
