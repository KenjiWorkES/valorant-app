const GameModesItem = ({ image, text, color }) => {
  const classes = color
    ? `gameModes__item gameModes__item--${color}`
    : "gameModes__item";

  return (
    <li className={classes}>
      {image && (
        <img className="gameModes__image" src={image} alt={"Modo de " + text} />
      )}
      <p className="gameModes__name">{text}</p>
    </li>
  );
};

export default GameModesItem;
