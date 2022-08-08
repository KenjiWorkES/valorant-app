const MainButton = ({ text, onClick, className }) => {
  const classes = "button" + (className ? className : "");

  const onClickHandler = onClick ? onClick : () => {};

  return (
    <button className={classes} onClick={onClickHandler}>
      {text}
    </button>
  );
};

export default MainButton;
