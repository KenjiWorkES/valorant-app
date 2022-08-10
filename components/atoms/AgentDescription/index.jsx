const AgentDescription = ({ isSubtitle, title, text }) => {
  if (isSubtitle) {
    return (
      <div className="singleAgent__description">
        <h2 className="singleAgent__function sectionHeading">{title}</h2>
        <p className="singleAgent__desc paragraph">{text}</p>
      </div>
    );
  }

  return (
    <div className="singleAgent__description">
      <h1 className="singleAgent__name heading">{title}</h1>
      <p className="singleAgent__desc paragraph">{text}</p>
    </div>
  );
};

export default AgentDescription;
