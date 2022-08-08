import Image from "next/image";

import { AgentsItem } from "../../atoms";

const AgentsGrid = () => {
  return (
    <div className="agents__grid">
      <button className="agents__leftArrow">
        <Image
          width={16}
          height={31}
          src="/arrow-left.svg"
          alt="Passar para a esquerda"
          className="agents__image"
        />
      </button>
      <ul className="agents__content">
        <AgentsItem name="Astra" image="" />
      </ul>
      <button className="agents__rightArrow">
        <Image
          width={16}
          height={31}
          src="/arrow-right.svg"
          alt="Passar para a direita"
          className="agents__image"
        />
      </button>
    </div>
  );
};

export default AgentsGrid;
