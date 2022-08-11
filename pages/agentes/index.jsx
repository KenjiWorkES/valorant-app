import { getAllAgents } from "../../service/agents";
import { AgentsFull } from "../../components/organisms";

const AgentsPage = ({ agents }) => {
  console.log(agents.data[0]);
  console.log(agents.data[7]);

  return <AgentsFull items={agents.data} />;
};

export const getStaticProps = async () => {
  const agents = await getAllAgents();

  return {
    props: {
      agents: agents,
    },
  };
};

export default AgentsPage;
