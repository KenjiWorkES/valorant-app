import Image from "next/image";

const SingleSkill = ({ skill }) => {
  return (
    <figure className="singleAgent__skill">
      <div className="singleAgent__skillIcon">
        <div>
          <Image
            className="singleAgent__icon"
            src={skill.displayIcon}
            alt={`Imagem da Habilidade ${skill.displayName}`}
            width={154}
            height={150}
          />
        </div>
      </div>
      <figcaption className="singleAgent__skillDesc">
        <h6 className="singleAgent__type">{skill.slot}</h6>
        <h5 className="singleAgent__ability">{skill.displayName}</h5>
        <p className="paragraph singleAgent__instruction">
          {skill.description}
        </p>
      </figcaption>
    </figure>
  );
};

export default SingleSkill;
