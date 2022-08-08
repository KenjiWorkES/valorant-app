import { FooterItem } from "../../atoms";

const FooterNav = () => {
  return (
    <nav className="footer__nav">
      <ul className="footer__list">
        <FooterItem text="Home" />
        <FooterItem text="Modos de Jogo" />
        <FooterItem text="Agentes" />
        <FooterItem text="Ranques" />
        <FooterItem text="Mapas" />
      </ul>
    </nav>
  );
};

export default FooterNav;
