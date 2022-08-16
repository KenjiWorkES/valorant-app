import Link from 'next/link';

const SearchItem = ({ text, link }) => {
  return (
    <Link href={link}>
      <a>
        <li className="searchPage__item">{text}</li>
      </a>
    </Link>
  );
};

export default SearchItem;
