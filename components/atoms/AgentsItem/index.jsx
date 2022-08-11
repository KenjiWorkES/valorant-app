import Image from "next/image";
import { useRouter } from "next/router";

const AgentsItem = ({ name, image, uuid }) => {
  const router = useRouter();

  const navigateHandler = () => {
    router.push(`/agentes/${uuid}`);
  };

  return (
    <li className="agents__item" onClick={navigateHandler}>
      <h3 className="agents__name">{name}</h3>
      <Image
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
