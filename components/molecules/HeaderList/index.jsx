import { HeaderItem } from "../../atoms";

const HeaderList = () => {
  return (
    <ul className="header__list">
      <HeaderItem text="Home" />
      <HeaderItem text="Agentes" />
      <HeaderItem text="Mapas" />
      <HeaderItem text="Modos de Jogos" />
      <HeaderItem text="Ranques" />
    </ul>
  );
};

export default HeaderList;
