import { MapsAccordion } from "../../molecules";

const HomeMaps = ({ items }) => {
  return (
    <section className="maps">
      <h2 className="sectionHeading maps__title">Mapas</h2>
      <MapsAccordion items={items} />
    </section>
  );
};

export default HomeMaps;
