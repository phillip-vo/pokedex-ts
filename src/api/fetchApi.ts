import axios from "axios";

async function fetchPokemons() {
    const { data } = await axios.get("https://pokeapi.co/api/v2/pokemon?&limit=10");
    return data;
}

async function fetchPokemon(url: string) {
    const { data } = await axios.get(url);
    return data;
}

export {fetchPokemons, fetchPokemon};