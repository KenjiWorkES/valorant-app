import { AgentDescription, AudioButton } from "../../atoms";
import Image from "next/image";
const AgentInformation = ({ description, name, role, image, audio }) => {
  return (
    <section className="singleAgent__information">
      <img
        className="singleAgent__image"
        src={image}
        alt={`Imagem do Personagem ${name}`}
      />

      <div className="singleAgent__text">
        <AgentDescription text={description} title={name} />
        <AgentDescription
          text={role.description}
          title={role.displayName}
          isSubtitle={true}
        />
        <AudioButton audio={audio} />
      </div>
    </section>
  );
};

export default AgentInformation;
