const RanksItem = ({ image, name }) => {
  return (
    <li className="ranks__item">
      <img className="ranks__image" src="" alt={"Rank " + name} />
      <p className="ranks__name">{name}</p>
    </li>
  );
};

export default RanksItem;
