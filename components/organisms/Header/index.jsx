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
      </nav>
      <SearchInput />
    </header>
  );
};

export default Header;
