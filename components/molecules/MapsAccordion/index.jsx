import { MapsTab } from "../../atoms";

const MapsAccordion = ({ items }) => {
  const slicedMaps = items.slice(0, 6);

  return (
    <div className="maps__accordion">
      {slicedMaps.map((map) => (
        <MapsTab
          key={map.uuid}
          image={map.splash}
          name={map.displayName}
          uuid={map.uuid}
        />
      ))}
    </div>
  );
};

export default MapsAccordion;
