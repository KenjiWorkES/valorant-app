import { FooterItem } from "../../atoms";

const FooterNav = () => {
  return (
    <nav className="footer__nav">
      <ul className="footer__list">
        <FooterItem text="Home" link="/" />
        <FooterItem text="Modos de Jogo" link="/modos-de-jogo" />
        <FooterItem text="Agentes" link="/agentes" />
        <FooterItem text="Ranques" link="/ranques" />
        <FooterItem text="Mapas" link="/mapas" />
      </ul>
    </nav>
  );
};

export default FooterNav;
