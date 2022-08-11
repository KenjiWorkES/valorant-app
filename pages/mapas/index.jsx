import { getAllMaps } from "../../service/maps";
import { Maps } from "../../components/organisms";

const MapsPage = ({ maps }) => {
  console.log(maps);

  return <Maps maps={maps} />;
};

export const getStaticProps = async () => {
  const maps = await getAllMaps();

  return {
    props: {
      maps: maps.data,
    },
  };
};
export default MapsPage;
