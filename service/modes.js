const url = "https://valorant-api.com/v1/gamemodes?language=pt-BR";

export const getAllGameModes = async () => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};
