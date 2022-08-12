import { useRouter } from "next/router";

import { Hero } from "../../components/organisms";
import { RanksPage } from "../../components/organisms";

import { getAllRanks } from "../../service/ranks";

const Ranks = ({ ranks }) => {
  const router = useRouter();

  const navigateReadMore = () => {
    router.push("/");
  };

  //console.log(ranks);

  return <RanksPage tiers={ranks.tiers} />;
};

export const getStaticProps = async () => {
  const ranks = await getAllRanks();

  return {
    props: {
      ranks: ranks.data[4],
    },
  };
};

export default Ranks;
