import { SearchModel } from '../../molecules';

const SearchResults = ({ agents, maps, modes, ranks, searchText }) => {
  return (
    <section className="searchPage">
      <h1 className="sectionHeading searchPage__title">
        Resultado das pesquisa: {searchText}
      </h1>
      <div className="searchPage__container">
        <SearchModel
          type="Agentes"
          items={agents || []}
          link="/agentes"
          uuid={true}
        />
        <SearchModel
          type="Mapas"
          items={maps || []}
          link="/mapas"
          uuid={true}
        />
        <SearchModel
          type="Modos de Jogos"
          items={modes || []}
          link="/modos-de-jogo"
          uuid={false}
        />
        <SearchModel
          type="Ranques"
          items={ranks || []}
          link="/ranques"
          uuid={false}
        />
      </div>
    </section>
  );
};

export default SearchResults;
