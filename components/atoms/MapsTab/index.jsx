const MapsTab = ({ image, text }) => {
  return (
    <figure className="maps__tab">
      <img className="maps__tabImage" src={image} alt={"Mapa " + text} />
      <figcaption className="maps__caption">
        <h3 className="maps__name">{text}</h3>
      </figcaption>
    </figure>
  );
};

export default MapsTab;
