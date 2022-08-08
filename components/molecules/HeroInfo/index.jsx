import { MainButton } from "../../atoms";

const HeroInfo = () => {
  return (
    <div className="hero__info">
      <h1 className="heading">Valorant: o jogo competitivo 5x5</h1>
      <p className="paragraph paragraph--semiBold">
        Um FPS tático 5x5 com personagens marcantes, mecânica de tiro precisa e
        habilidades únicas!{" "}
      </p>
      <MainButton text="saiba mais" />
    </div>
  );
};

export default HeroInfo;
