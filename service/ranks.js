const url = "https://valorant-api.com/v1/competitivetiers?language=pt-BR";

export const getAllRanks = async () => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};
