const BASE_URL = 'https://rickandmortyapi.com/api';

export const getCharacters = async () => {
  try {
    const response = await fetch(`${BASE_URL}/character`);

    if (!response.ok) {
      throw new Error(`Erro de rede: ${response.status}`);
    }

    const data = await response.json();

    return data.results;
  } catch (error) {
    console.error('Erro ao buscar dados da API:', error);
    throw error;
  }
};