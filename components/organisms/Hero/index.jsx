import Image from "next/image";

import { HeroInfo } from "../../molecules";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__container">
        <HeroInfo />
        <Image
          src="/hero-image.png"
          alt="Imagem com 3 agentes"
          width="565"
          height="565"
        />
      </div>
    </section>
  );
};

export default Hero;
