import { Pokemon } from "./Pokemon";

export const MOCK_POKEMONS = [
    new Pokemon({
        id: 1,
        name: "balbasaur",
        height: 7,
        weight: 69,
        sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png",
        types: [
            {
                "slot": 1,
                "type": {
                  "name": "grass",
                  "url": "https://pokeapi.co/api/v2/type/12/"
                }
              },
              {
                "slot": 2,
                "type": {
                  "name": "poison",
                  "url": "https://pokeapi.co/api/v2/type/4/"
                }
              }
        ],
        stats: [
            {
                "base_stat": 45,
                "effort": 0,
                "stat": {
                  "name": "hp",
                  "url": "https://pokeapi.co/api/v2/stat/1/"
                }
              },
              {
                "base_stat": 49,
                "effort": 0,
                "stat": {
                  "name": "attack",
                  "url": "https://pokeapi.co/api/v2/stat/2/"
                }
              },
              {
                "base_stat": 49,
                "effort": 0,
                "stat": {
                  "name": "defense",
                  "url": "https://pokeapi.co/api/v2/stat/3/"
                }
              },
              {
                "base_stat": 65,
                "effort": 1,
                "stat": {
                  "name": "special-attack",
                  "url": "https://pokeapi.co/api/v2/stat/4/"
                }
              },
              {
                "base_stat": 65,
                "effort": 0,
                "stat": {
                  "name": "special-defense",
                  "url": "https://pokeapi.co/api/v2/stat/5/"
                }
              },
              {
                "base_stat": 45,
                "effort": 0,
                "stat": {
                  "name": "speed",
                  "url": "https://pokeapi.co/api/v2/stat/6/"
                }
              }
        ]
    }),
    new Pokemon({
        id: 4,
        name: "charmander",
        height: 6,
        weight: 85,
        sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/4.png",
        types: [
            {
                "slot": 1,
                "type": {
                  "name": "fire",
                  "url": "https://pokeapi.co/api/v2/type/10/"
                }
              }
        ],
        stats: [
            {
                "base_stat": 39,
                "effort": 0,
                "stat": {
                  "name": "hp",
                  "url": "https://pokeapi.co/api/v2/stat/1/"
                }
              },
              {
                "base_stat": 52,
                "effort": 0,
                "stat": {
                  "name": "attack",
                  "url": "https://pokeapi.co/api/v2/stat/2/"
                }
              },
              {
                "base_stat": 43,
                "effort": 0,
                "stat": {
                  "name": "defense",
                  "url": "https://pokeapi.co/api/v2/stat/3/"
                }
              },
              {
                "base_stat": 60,
                "effort": 0,
                "stat": {
                  "name": "special-attack",
                  "url": "https://pokeapi.co/api/v2/stat/4/"
                }
              },
              {
                "base_stat": 50,
                "effort": 0,
                "stat": {
                  "name": "special-defense",
                  "url": "https://pokeapi.co/api/v2/stat/5/"
                }
              },
              {
                "base_stat": 65,
                "effort": 1,
                "stat": {
                  "name": "speed",
                  "url": "https://pokeapi.co/api/v2/stat/6/"
                }
              }
        ]
    }),
    new Pokemon({
        id: 150,
        name: "mewtwo",
        height: 20,
        weight: 1220,
        sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/150.png",
        types: [
            {
                "slot": 1,
                "type": {
                  "name": "psychic",
                  "url": "https://pokeapi.co/api/v2/type/14/"
                }
              }
        ],
        stats: [
            {
                "base_stat": 106,
                "effort": 0,
                "stat": {
                  "name": "hp",
                  "url": "https://pokeapi.co/api/v2/stat/1/"
                }
              },
              {
                "base_stat": 110,
                "effort": 0,
                "stat": {
                  "name": "attack",
                  "url": "https://pokeapi.co/api/v2/stat/2/"
                }
              },
              {
                "base_stat": 90,
                "effort": 0,
                "stat": {
                  "name": "defense",
                  "url": "https://pokeapi.co/api/v2/stat/3/"
                }
              },
              {
                "base_stat": 154,
                "effort": 3,
                "stat": {
                  "name": "special-attack",
                  "url": "https://pokeapi.co/api/v2/stat/4/"
                }
              },
              {
                "base_stat": 90,
                "effort": 0,
                "stat": {
                  "name": "special-defense",
                  "url": "https://pokeapi.co/api/v2/stat/5/"
                }
              },
              {
                "base_stat": 130,
                "effort": 0,
                "stat": {
                  "name": "speed",
                  "url": "https://pokeapi.co/api/v2/stat/6/"
                }
              }
        ]
    })
]