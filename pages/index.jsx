import {
  Hero,
  Agents,
  GameModes,
  HomeMaps,
  HomeRanks,
} from "../components/organisms";

import { useRouter } from "next/router";

import { getAllAgents } from "../service/agents";
import { getAllGameModes } from "../service/modes";
import { getAllMaps } from "../service/maps";
import { getAllRanks } from "../service/ranks";

const HomePage = ({ agents, gameModes, maps, ranks }) => {
  const router = useRouter();

  const navigateReadMore = () => {
    window.location.href =
      "https://playvalorant.com/pt-br/?gclid=CjwKCAjw9NeXBhAMEiwAbaY4lqAoe5VBlGEz10ZkOWgoPCNP9gc-OFfMN5Cf4CGBDNa0Tfd6dTh6ihoCv9kQAvD_BwE&gclsrc=aw.ds";
  };

  return (
    <>
      <Hero
        image="/hero-image.png"
        text=" Um FPS tático 5x5 com personagens marcantes, mecânica de tiro precisa e
        habilidades únicas!"
        title="Valorant: o jogo competitivo 5x5"
        buttonText="saiba mais"
        onClick={navigateReadMore}
      />
      <Agents items={agents.data} />
      <GameModes items={gameModes.data} />
      <HomeMaps items={maps.data} />
      <HomeRanks items={ranks.data} />
    </>
  );
};

export const getStaticProps = async () => {
  const agents = await getAllAgents();

  const gameModes = await getAllGameModes();

  const maps = await getAllMaps();

  const ranks = await getAllRanks();

  return {
    props: {
      agents: agents,
      gameModes: gameModes,
      maps: maps,
      ranks: ranks,
    },
  };
};

export default HomePage;
