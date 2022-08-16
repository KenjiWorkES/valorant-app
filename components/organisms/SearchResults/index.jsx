import { SearchModel } from '../../molecules';

const SearchResults = ({ agents, maps, gameModes, ranks, searchText }) => {
  return (
    <section className="searchPage">
      <h1 className="sectionHeading searchPage__title">
        Resultado das pesquisa: {searchText}
      </h1>
      <SearchModel
        type="Agentes"
        items={agents || []}
        link="/agentes"
        uuid={true}
      />
      <SearchModel type="Mapas" items={maps || []} link="/mapas" uuid={true} />
      <SearchModel
        type="Modos de Jogos"
        items={gameModes || []}
        link="/modos-de-jogo"
        uuid={false}
      />
      <SearchModel
        type="Ranques"
        items={ranks || []}
        link="/ranques"
        uuid={false}
      />
    </section>
  );
};

export default SearchResults;
