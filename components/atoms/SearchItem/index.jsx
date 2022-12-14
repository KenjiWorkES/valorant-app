import Link from 'next/link';

const SearchItem = ({ text, link, uuid }) => {
  let linkPath = link;
  if (uuid) {
    linkPath = `${link}/${uuid}`;
  }

  return (
    <Link href={linkPath}>
      <a className="searchPage__link">
        <li className="searchPage__item">{text}</li>
      </a>
    </Link>
  );
};

export default SearchItem;
