const baseUrl = 'https://valorant-api.com/v1/maps';

export const getAllMaps = async () => {
  const response = await fetch(baseUrl + '?language=pt-BR');
  const data = await response.json();
  return data;
};

export const getSingleMap = async (uuid) => {
  const response = await fetch(`${baseUrl}/${uuid}?language=pt-BR`);
  const data = await response.json();
  return data;
};

export const getfilteredMaps = async (text) => {
  const response = await fetch(baseUrl + '?language=pt-BR');
  const data = await response.json();

  const filteredMaps = data.data.filter((map) =>
    map.displayName.toLowerCase().includes(text)
  );
  return filteredMaps;
};
