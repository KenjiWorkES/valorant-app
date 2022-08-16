import { useRouter } from 'next/router';

import { useRef } from 'react';

const SearchInput = () => {
  const router = useRouter();

  const inputRef = useRef();

  const searchHandler = (event) => {
    event.preventDefault();
    if (inputRef.current.value.trim() !== '') {
      router.push(`/${inputRef.current.value.toLowerCase()}`);
    } else {
      alert('Digite algo para pesquisar');
    }
  };

  return (
    <form className="search" onSubmit={searchHandler}>
      <input
        ref={inputRef}
        type="text"
        className="search__input"
        placeholder="Pesquisar..."
      />
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
