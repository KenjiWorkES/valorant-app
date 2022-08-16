import { SearchItem } from '../../atoms';

const SearchModel = ({ type, items, link, uuid }) => {
  console.log(items);

  return (
    <>
      <h3 className="searchPage__type">{type}</h3>
      <ul className="searchPage__list">
        {items &&
          items.map((item) => (
            <SearchItem
              key={item.displayName || item.tierName}
              text={item.displayName || item.tierName}
              link={link}
              uuid={uuid && item.uuid}
            />
          ))}
        {items.length === 0 && <p>nenhum resultado encontrado</p>}
      </ul>
    </>
  );
};

export default SearchModel;
