import { AgentSkills, AgentInformation } from "../../molecules";

const AgentSingle = ({ agent }) => {
  return (
    <section className="singleAgent">
      <AgentInformation
        description={agent.description}
        name={agent.displayName}
        role={agent.role}
        image={agent.fullPortraitV2}
      />
      <AgentSkills skills={agent.abilities} />
    </section>
  );
};

export default AgentSingle;
