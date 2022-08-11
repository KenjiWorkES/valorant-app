import Image from "next/image";

import { HeroInfo } from "../../molecules";

const Hero = ({ image, title, text, onClick, buttonText }) => {
  return (
    <section className="hero">
      <div className="hero__container">
        <HeroInfo
          title={title}
          text={text}
          buttonText={buttonText}
          onClick={onClick}
        />
        <Image
          src={image}
          alt="Imagem com 3 agentes"
          width="565"
          height="565"
          className="hero__image"
        />
      </div>
    </section>
  );
};

export default Hero;
