import { getfilteredAgents } from '../service/agents';
import { getfilteredMaps } from '../service/maps';
import { getfilteredGameModes } from '../service/modes';
import { getfilteredRanks } from '../service/ranks';

import { SearchResults } from '../components/organisms';

const SearchPage = ({ searchText, agents, modes, maps, ranks }) => {
  console.log(ranks);

  return (
    <SearchResults
      searchText={searchText}
      agents={agents}
      modes={modes}
      maps={maps}
      ranks={ranks}
    />
  );
};

export const getStaticPaths = async (ctx) => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};

export const getStaticProps = async (ctx) => {
  const { params } = ctx;
  const searchText = params.searchSlug[0];

  const agents = await getfilteredAgents(searchText);
  const modes = await getfilteredGameModes(searchText);
  const maps = await getfilteredMaps(searchText);
  const ranks = await getfilteredRanks(searchText);

  return {
    props: {
      searchText: searchText,
      agents: agents,
      modes: modes,
      maps: maps,
      ranks: ranks,
    },
  };
};

export default SearchPage;
