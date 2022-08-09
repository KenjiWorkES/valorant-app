const GameModesItem = ({ image, text }) => {
  return (
    <li className="gameModes__item">
      <img className="gameModes__image" src={image} alt={"Modo de " + text} />
      <p className="gameModes__name">{text}</p>
    </li>
  );
};

export default GameModesItem;
