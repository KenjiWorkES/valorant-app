import { MainButton } from "../../atoms";

const HeroInfo = ({ title, text, onClick, buttonText }) => {
  return (
    <div className="hero__info">
      <h1 className="heading hero__title">{title}</h1>
      <p className="paragraph paragraph--semiBold hero__text">{text} </p>
      <MainButton onClick={onClick} text={buttonText} />
    </div>
  );
};

export default HeroInfo;
