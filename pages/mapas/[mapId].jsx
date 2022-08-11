import { getSingleMap } from "../../service/maps";
import Image from "next/image";

const AgentsSingle = ({ map }) => {
  console.log(map);
  return (
    <section className="singleMap">
      <h1 className="singleMap__name heading">{map.displayName}</h1>
      <div className="singleMap__banner">
        <img
          className="singleMap__image"
          src={map.splash}
          alt={`Imagem do Mapa ${map.displayName}`}
        />
      </div>

      <img
        className="singleMap__map"
        src={map.displayIcon}
        alt={`Imagem do Mapa ${map.displayName}`}
      />
    </section>
  );
};

export const getStaticPaths = async (ctx) => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps = async (ctx) => {
  const { params } = ctx;
  const mapId = params.mapId;

  const map = await getSingleMap(mapId);

  return {
    props: {
      map: map.data,
    },
  };
};

export default AgentsSingle;
