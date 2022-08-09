import Image from "next/image";

const RanksItem = ({ image, name }) => {
  return (
    <li className="ranks__item">
      <Image
        className="ranks__image"
        src={image}
        alt={"Rank " + name}
        width={200}
        height={200}
      />
      <p className="ranks__name">{name}</p>
    </li>
  );
};

export default RanksItem;
