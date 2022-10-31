import { Pokemon } from "./Pokemon";

export const MOCK_POKEMONS = [
    new Pokemon({
        id: 1,
        name: "balbasaur",
        height: 7,
        weight: 69,
        sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png"
    }),
    new Pokemon({
        id: 4,
        name: "charmander",
        height: 6,
        weight: 85,
        sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/4.png"
    }),
    new Pokemon({
        id: 150,
        name: "mewtwo",
        height: 20,
        weight: 1220,
        sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/150.png"
    })
]