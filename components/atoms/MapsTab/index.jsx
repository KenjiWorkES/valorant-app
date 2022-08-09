import Image from "next/image";

const MapsTab = ({ image, name }) => {
  return (
    <figure className="maps__tab">
      <Image
        className="maps__tabImage"
        src={image}
        alt={"Mapa " + name}
        width={640}
        height={360}
      />
      <figcaption className="maps__caption">
        <h3 className="maps__name">{name}</h3>
      </figcaption>
    </figure>
  );
};

export default MapsTab;
