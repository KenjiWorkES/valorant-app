const SearchModel = ({ type }) => {
  return (
    <>
      <h3 className="searchPage__type">{type}</h3>
      <ul className="searchPage__list"></ul>
    </>
  );
};

export default SearchModel;
