import { HeaderList } from "../../molecules";
import { SearchInput } from "../../atoms";

const Header = () => {
  return (
    <header className="header">
      <img
        className="header__logo"
        src="/logo.svg"
        alt="Valorant website logo"
      />
      <nav className="header__nav">
        <HeaderList />
        <SearchInput />
      </nav>
      <button className="header__burguer">
        <span className="header__line"></span>
      </button>
    </header>
  );
};

export default Header;
