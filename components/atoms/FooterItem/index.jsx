import Link from "next/link";

const FooterItem = ({ text, link }) => {
  return (
    <Link href={link}>
      <a className="footer__link">
        <li className="footer__item">{text}</li>
      </a>
    </Link>
  );
};

export default FooterItem;
