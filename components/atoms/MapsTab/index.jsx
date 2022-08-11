import Image from "next/image";
import { useRouter } from "next/router";

const MapsTab = ({ image, name, uuid }) => {
  const router = useRouter();

  const navigateHandler = () => {
    router.push(`/mapas/${uuid}`);
  };

  return (
    <figure className="maps__tab" onClick={navigateHandler}>
      <Image
        className="maps__tabImage"
        src={image}
        alt={"Mapa " + name}
        layout="fill"
      />
      <figcaption className="maps__caption">
        <h3 className="maps__name">{name}</h3>
      </figcaption>
    </figure>
  );
};

export default MapsTab;
