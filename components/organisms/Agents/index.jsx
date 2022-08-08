import { AgentsGrid } from "../../molecules";
import { MainButton } from "../../atoms";

const Agents = () => {
  return (
    <section className="agents">
      <h2 className="sectionHeading">Agentes</h2>
      <AgentsGrid />
      <MainButton text="Ver todos os agentes" />
    </section>
  );
};

export default Agents;
