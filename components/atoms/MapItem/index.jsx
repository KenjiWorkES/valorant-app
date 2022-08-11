import Link from "next/link";

const MapItem = ({ uuid, name, image }) => {
  return (
    <Link href={`/mapas/${uuid}`}>
      <a className="mapsPage__link">
        <li className="mapsPage__item">
          <img className="mapsPage__image" src={image} alt={`Mapa ${name}`} />
          <h3 className="mapsPage__name">{name}</h3>
        </li>
      </a>
    </Link>
  );
};

export default MapItem;
