import { AgentsGrid } from "../../molecules";
import { SearchInput } from "../../atoms";

const AgentsFull = ({ items }) => {
  return (
    <section className="agents">
      <h2 className="sectionHeading">Agentes</h2>
      <SearchInput color="dark" />
      <AgentsGrid items={items} />
    </section>
  );
};

export default AgentsFull;
