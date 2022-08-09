import { AgentsGrid } from "../../molecules";

const AgentsFull = ({ items }) => {
  return (
    <section className="agents">
      <h2 className="sectionHeading">Agentes</h2>
      <AgentsGrid isFull={true} items={items} />
    </section>
  );
};

export default AgentsFull;
