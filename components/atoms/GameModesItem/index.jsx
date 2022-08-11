const GameModesItem = ({ image, text, color, hasTime, time }) => {
  const classes = color
    ? `gameModes__item gameModes__item--${color}`
    : "gameModes__item";

  return (
    <li className={classes}>
      {image && (
        <img className="gameModes__image" src={image} alt={"Modo de " + text} />
      )}
      <h4 className="gameModes__name">{text}</h4>
      {hasTime && time && <p className="gameModes__time">{time}</p>}
      {hasTime && !time && <p className="gameModes__time">INDEFINIDO</p>}
    </li>
  );
};

export default GameModesItem;
