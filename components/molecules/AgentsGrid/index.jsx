import { useRef, useEffect, useState } from "react";

import Image from "next/image";

import { AgentsItem } from "../../atoms";

const AgentsGrid = ({ items, isFull }) => {
  let slicedItems;

  if (isFull) {
    slicedItems = items;
  } else {
    slicedItems = items.slice(0, 8);
  }

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
    <div className={"agents__grid " + (isFull ? "agents__grid--full" : "")}>
      <button
        className={
          "agents__leftArrow " + (isFull ? "agents__leftArrow--full" : "")
        }
        onClick={scrollToLeftHandler}
      >
        <Image
          width={16}
          height={31}
          src="/arrow-left.svg"
          alt="Passar para a esquerda"
          className="agents__icon"
        />
      </button>
      <ul
        className={"agents__content " + (isFull ? "agents__content--full" : "")}
        ref={sliderRef}
      >
        {slicedItems.map((agent) => (
          <AgentsItem
            uuid={agent.uuid}
            key={agent.uuid}
            name={agent.displayName}
            image={agent.fullPortraitV2}
          />
        ))}
      </ul>
      <button
        className={
          "agents__rightArrow " + (isFull ? "agents__rightArrow--full" : "")
        }
        onClick={scrollToRightHandler}
      >
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
