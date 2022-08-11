const baseUrl = "https://valorant-api.com/v1/maps";

export const getAllMaps = async () => {
  const response = await fetch(baseUrl + "?language=pt-BR");
  const data = await response.json();
  return data;
};

export const getSingleMap = async (uuid) => {
  const response = await fetch(`${baseUrl}/${uuid}?language=pt-BR`);
  const data = await response.json();
  return data;
};
