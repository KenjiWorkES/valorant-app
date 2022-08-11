import { AgentsGrid } from "../../molecules";
import { MainButton } from "../../atoms";

import { useRouter } from "next/router";

const Agents = ({ items }) => {
  const router = useRouter();

  const navigateReadMore = () => {
    router.push("/agentes");
  };

  return (
    <section className="agents">
      <h2 className="sectionHeading">Agentes</h2>
      <AgentsGrid items={items} />
      <MainButton
        className="button--outlineRed agents__button"
        text="Ver todos os agentes"
        onClick={navigateReadMore}
      />
    </section>
  );
};

export default Agents;
