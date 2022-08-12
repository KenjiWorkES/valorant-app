import Image from "next/image";

const RanksItem = ({ image, name, className, nameClassName }) => {
  const classes = className ? `ranks__item ${className}` : "ranks__item";
  const nameClasses = nameClassName
    ? `ranks__name ${nameClassName}`
    : "ranks__name";

  return (
    <li className={classes}>
      <Image
        className="ranks_image"
        src={image}
        alt={"Rank " + name}
        width={200}
        height={200}
      />
      <p className={nameClasses}>{name}</p>
    </li>
  );
};

export default RanksItem;
