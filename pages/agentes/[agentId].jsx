import { getSingleAgent } from "../../service/agents";

const AgentSingle = (props) => {
  console.log(props.agent);

  return <h1>Test</h1>;
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
