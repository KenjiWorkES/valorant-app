import Image from "next/image";

const AgentsItem = ({ name, image, id }) => {
  return (
    <li className="agents__item">
      <h3 className="agents__name">{name}</h3>
      <img
        className="agents__image"
        width={279}
        height={279}
        src={image}
        alt={"Imagem do " + name}
      />
    </li>
  );
};

export default AgentsItem;
