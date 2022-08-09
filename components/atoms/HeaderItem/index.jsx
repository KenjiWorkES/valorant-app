import Link from "next/link";

const HeaderItem = ({ text, link }) => {
  return (
    <Link href={link}>
      <a className="header__link">
        <li className="header__item">{text}</li>
      </a>
    </Link>
  );
};

export default HeaderItem;
