import { useRouter } from "next/router";

import { Hero } from "../../components/organisms";

const ReadMorePage = () => {
  const router = useRouter();

  const navigateReadMore = () => {
    router.push("/");
  };

  return (
    <Hero
      image="/no-found-image.png"
      text="A não! Parece que a Killjoy ainda não terminou de desenvolver essa página."
      title="Página em desenvolvimento"
      buttonText="ir para home"
      onClick={navigateReadMore}
    />
  );
};

export default ReadMorePage;
