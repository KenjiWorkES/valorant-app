import { useRouter } from 'next/router';

const SearchResults = ({ agents, maps, gameModes, ranks }) => {
  const router = useRouter();
  const searchText = router.query.searchSlug[0];

  return (
    <section className="searchPage">
      <h1 className="sectionHeading searchPage__title">
        Resultado das pesquisa: {searchText}
      </h1>
    </section>
  );
};

export default SearchResults;
