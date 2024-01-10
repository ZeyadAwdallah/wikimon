export interface Pokemon {
  name: string;
  url: string;
  id: number;
  image: string;
  sprites?: any;
  abilities?: any;
  stats?: any;
}

export const getPokemon = async (limit = 150): Promise<Pokemon[]> => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`);
    const data = await response.json();
    return data.results.map((item: Pokemon, index: number) => ({
      ...item,
      id: index + 1,
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`,
    }));
  } catch (error) {
    console.error("Error fetching Pokemon data:", error);
    throw error;
  }
};

export const getPokemonDetailes = async (id: string): Promise<Pokemon> => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching Pokemon details:", error);
    throw error;
  }
};