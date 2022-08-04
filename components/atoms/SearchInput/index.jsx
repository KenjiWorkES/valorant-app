const SearchInput = () => {
  return (
    <form className="search">
      <input type="text" className="search__input" />
      <button className="search__button">
        <img
          src="/search-white-icon.svg"
          alt="Search Button Icon"
          className="search__icon"
        />
      </button>
    </form>
  );
};

export default SearchInput;
