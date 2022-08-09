const url = "https://valorant-api.com/v1/maps?language=pt-BR";

export const getAllMaps = async () => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};
