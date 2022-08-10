import { AgentDescription } from "../../atoms";
const AgentInformation = () => {
  return (
    <section className="singleAgent__information">
      <img className="singleAgent__image" src="" />
      <div className="singleAgent__text">
        <AgentDescription />
        <AgentDescription />
      </div>
    </section>
  );
};

export default AgentInformation;
