import { getAllAgents } from "../../service/agents";
import { AgentsFull } from "../../components/organisms";

const AgentsPage = ({ agents }) => {
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
