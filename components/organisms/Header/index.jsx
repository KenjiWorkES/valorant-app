import { HeaderList } from "../../molecules";
import { SearchInput } from "../../atoms";
import { useState } from "react";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const navClasses = `header__nav ${isActive ? "header__nav--active" : ""}`;
  const lineClasses = `header__line ${isActive ? "header__line--active" : ""}`;

  const activeMenuHandler = () => {
    setIsActive((prev) => {
      return !prev;
    });
  };

  return (
    <header className="header">
      <div className="header__container">
        <img
          className="header__logo"
          src="/logo.svg"
          alt="Valorant website logo"
        />
        <nav className={navClasses}>
          <HeaderList />
          <SearchInput />
        </nav>
        <button onClick={activeMenuHandler} className="header__burguer">
          <span className={lineClasses}></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
