import { getAllMaps } from "../../service/maps";

const MapsPage = ({ maps }) => {
  console.log(maps);
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
