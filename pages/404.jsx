import { useRouter } from "next/router";

import { Hero } from "../components/organisms";

const NotFounPage = () => {
  const router = useRouter();

  const navigateReadMore = () => {
    router.push("/");
  };

  return (
    <Hero
      image="/no-found-image.png"
      text="A não! Parece que a página não foi desenvolvida. Vou pedir para a KillJoy desenvolver a página"
      title="Erro 404"
      buttonText="ir para home"
      onClick={navigateReadMore}
    />
  );
};

export default NotFounPage;
