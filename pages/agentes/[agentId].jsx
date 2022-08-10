import { getSingleAgent } from "../../service/agents";
import { SingleAgent } from "../../components/organisms";

const AgentSingle = ({ agent }) => {
  console.log(agent);

  return <SingleAgent agent={agent} />;
};

export const getStaticPaths = async (ctx) => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps = async (ctx) => {
  const { params } = ctx;
  const agentId = params.agentId;

  const agentData = await getSingleAgent(agentId);

  return {
    props: {
      agent: agentData.data,
    },
  };
};

export default AgentSingle;
