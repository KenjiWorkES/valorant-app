import Image from "next/image";

import { AgentsItem } from "../../atoms";

const AgentsGrid = ({ items }) => {
  const slicedItems = items.slice(0, 8);

  return (
    <div className="agents__grid">
      <button className="agents__leftArrow">
        <Image
          width={16}
          height={31}
          src="/arrow-left.svg"
          alt="Passar para a esquerda"
          className="agents__icon"
        />
      </button>
      <ul className="agents__content">
        {slicedItems.map((agent) => (
          <AgentsItem
            key={agent.uuid}
            name={agent.displayName}
            image={agent.fullPortrait}
          />
        ))}
      </ul>
      <button className="agents__rightArrow">
        <Image
          width={16}
          height={31}
          src="/arrow-right.svg"
          alt="Passar para a direita"
          className="agents__icon"
        />
      </button>
    </div>
  );
};

export default AgentsGrid;
