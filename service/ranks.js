const url = 'https://valorant-api.com/v1/competitivetiers?language=pt-BR';

export const getAllRanks = async () => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export const getfilteredRanks = async (text) => {
  const response = await fetch(url);
  const data = await response.json();

  const filteredMaps = data.data[4].tiers.filter((rank) =>
    rank.tierName.toLowerCase().includes(text)
  );
  return filteredMaps;
};
