import { FooterNav, FooterSocial } from "../../molecules";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__copyright">
          <h2 className="footer__title">© Copyright Valorant Media Wiki</h2>
          <p className="footer__paragraph">
            Valorant Media Wiki é um site não oficial e não endossada pela Riot
            Games de forma alguma. Riot Games, Valorant e todas as propriedades
            associadas são marcas comerciais ou marcas registradas da Riot
            Games, Inc.
          </p>
        </div>
        <FooterNav />
        <FooterSocial />
      </div>
    </footer>
  );
};

export default Footer;
