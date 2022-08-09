import Link from "next/link";
import { useRouter } from "next/router";

const HeaderItem = ({ text, link }) => {
  const router = useRouter();
  const pathName = router.pathname;

  let classes = "header__item";
  if (pathName === link) {
    classes = "header__item header__item--active";
  }

  return (
    <Link href={link}>
      <a className="header__link">
        <li className={classes}>{text}</li>
      </a>
    </Link>
  );
};

export default HeaderItem;
