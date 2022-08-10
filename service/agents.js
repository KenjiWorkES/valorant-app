const baseUrl = "https://valorant-api.com/v1/agents";

export const getAllAgents = async () => {
  const response = await fetch(
    `${baseUrl}?language=pt-BR&isPlayableCharacter=true`
  );
  const data = await response.json();
  return data;
};

export const getSingleAgent = async (uuid) => {
  const response = await fetch(`${baseUrl}/${uuid}?language=pt-BR`);
  const data = await response.json();
  return data;
};
