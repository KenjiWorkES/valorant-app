import { MapItem } from "../../atoms";

const MapsGrid = ({ maps }) => {
  return (
    <ul className="mapsPage__grid">
      {maps.map((map) => (
        <MapItem
          key={map.uuid}
          uuid={map.uuid}
          name={map.displayName}
          image={map.splash}
        />
      ))}
    </ul>
  );
};

export default MapsGrid;
