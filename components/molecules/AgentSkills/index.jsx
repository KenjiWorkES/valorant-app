import { SingleSkill } from "../../atoms";

const AgentSkills = ({ skills }) => {
  return (
    <section className="singleAgents__skills">
      <h3 className="singlesAgents__subTitle subHeading">Habilidades</h3>
      {skills.map((skill, index) => (
        <SingleSkill key={index} skill={skill} />
      ))}
    </section>
  );
};

export default AgentSkills;
