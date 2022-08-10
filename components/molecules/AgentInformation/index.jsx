import { AgentDescription } from "../../atoms";
const AgentInformation = ({ description, name, role, image }) => {
  return (
    <section className="singleAgent__information">
      <img
        className="singleAgent__image"
        src={image}
        alt={`Imagem do Personagem ${name}`}
      />
      <div className="singleAgent__text">
        <AgentDescription text={description} title={role} />
        <AgentDescription
          text={role.description}
          title={role.displayName}
          isSubtitle={true}
        />
      </div>
    </section>
  );
};

export default AgentInformation;
