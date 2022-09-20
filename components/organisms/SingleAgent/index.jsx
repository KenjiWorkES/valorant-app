import { AgentSkills, AgentInformation } from '../../molecules';

const SingleAgent = ({ agent }) => {
  return (
    <section className="singleAgent">
      <AgentInformation
        description={agent.description}
        name={agent.displayName}
        role={agent.role}
        image={agent.fullPortrait}
        audio={agent.voiceLine.mediaList[0].wave}
      />
      <AgentSkills skills={agent.abilities} />
    </section>
  );
};

export default SingleAgent;
