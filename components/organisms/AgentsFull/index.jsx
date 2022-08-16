import { AgentsGrid } from '../../molecules';

const AgentsFull = ({ items }) => {
  return (
    <section className="agents">
      <h1 className="sectionHeading">Agentes</h1>
      <AgentsGrid isFull={true} items={items} />
    </section>
  );
};

export default AgentsFull;
