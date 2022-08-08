import { AgentsGrid } from "../../molecules";
import { MainButton } from "../../atoms";

const Agents = ({ items }) => {
  return (
    <section className="agents">
      <h2 className="sectionHeading">Agentes</h2>
      <AgentsGrid items={items} />
      <MainButton
        className="button--outlineRed agents__button"
        text="Ver todos os agentes"
      />
    </section>
  );
};

export default Agents;
