import { useRef, useEffect } from "react";

import Image from "next/image";

import { AgentsItem } from "../../atoms";

const AgentsGrid = ({ items }) => {
  const slicedItems = items.slice(0, 8);

  const sliderRef = useRef();

  const scrollToLeftHandler = () => {
    const width = sliderRef.current.getBoundingClientRect().width;
    sliderRef.current.scrollBy(-width, 0);
  };

  const scrollToRightHandler = () => {
    const width = sliderRef.current.getBoundingClientRect().width;
    sliderRef.current.scrollBy(width, 0);
  };

  return (
    <div className="agents__grid">
      <button className="agents__leftArrow" onClick={scrollToLeftHandler}>
        <Image
          width={16}
          height={31}
          src="/arrow-left.svg"
          alt="Passar para a esquerda"
          className="agents__icon"
        />
      </button>
      <ul className="agents__content" ref={sliderRef}>
        {slicedItems.map((agent) => (
          <AgentsItem
            key={agent.uuid}
            name={agent.displayName}
            image={agent.fullPortrait}
          />
        ))}
      </ul>
      <button className="agents__rightArrow" onClick={scrollToRightHandler}>
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
