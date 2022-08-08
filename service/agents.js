const url = "https://valorant-api.com/v1/agents";

export const getAllAgents = async () => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export default getAllAgents;
