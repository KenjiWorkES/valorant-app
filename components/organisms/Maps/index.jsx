import { MapsGrid } from "../../molecules";

const Maps = ({ maps }) => {
  return (
    <section className="mapsPage">
      <h1 className="sectionHeading mapsPage__title">Mapas</h1>
      <MapsGrid maps={maps} />
    </section>
  );
};

export default Maps;
