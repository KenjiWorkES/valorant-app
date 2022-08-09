import { HeaderItem } from "../../atoms";

const HeaderList = () => {
  return (
    <ul className="header__list">
      <HeaderItem text="Home" link="/" />
      <HeaderItem text="Agentes" link="/agentes" />
      <HeaderItem text="Mapas" link="/mapas" />
      <HeaderItem text="Modos de Jogos" link="/modos-de-jogo" />
      <HeaderItem text="Ranques" link="/ranques" />
    </ul>
  );
};

export default HeaderList;
