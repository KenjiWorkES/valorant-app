import { AgentSkills, AgentInformation } from "../../molecules";

const AgentSingle = () => {
  return (
    <section className="singleAgent">
      <AgentInformation />
      <AgentSkills />
    </section>
  );
};

export default AgentSingle;
