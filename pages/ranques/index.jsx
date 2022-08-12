import { useRouter } from "next/router";

import { Hero } from "../../components/organisms";

import { getAllRanks } from "../../service/ranks";

const RanksPage = ({ ranks }) => {
  const router = useRouter();

  const navigateReadMore = () => {
    router.push("/");
  };

  console.log(ranks);

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

export const getStaticProps = async () => {
  const ranks = await getAllRanks();

  return {
    props: {
      ranks: ranks.data[4],
    },
  };
};

export default RanksPage;
