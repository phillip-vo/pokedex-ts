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
        id: 104,
        name: "cubone",
        height: 4,
        weight: 65,
        sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/104.png",
        types: [
          {
            "slot": 1,
            "type": {
              "name": "ground",
              "url": "https://pokeapi.co/api/v2/type/5/"
            }
          }
        ],
        stats: [
          {
            "base_stat": 50,
            "effort": 0,
            "stat": {
              "name": "hp",
              "url": "https://pokeapi.co/api/v2/stat/1/"
            }
          },
          {
            "base_stat": 50,
            "effort": 0,
            "stat": {
              "name": "attack",
              "url": "https://pokeapi.co/api/v2/stat/2/"
            }
          },
          {
            "base_stat": 95,
            "effort": 1,
            "stat": {
              "name": "defense",
              "url": "https://pokeapi.co/api/v2/stat/3/"
            }
          },
          {
            "base_stat": 40,
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
            "base_stat": 35,
            "effort": 0,
            "stat": {
              "name": "speed",
              "url": "https://pokeapi.co/api/v2/stat/6/"
            }
          }
        ]
    }),
    new Pokemon({
        id: 134,
        name: "vaporeon",
        height: 10,
        weight: 290,
        sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/134.png",
        types: [
          {
            "slot": 1,
            "type": {
              "name": "water",
              "url": "https://pokeapi.co/api/v2/type/11/"
            }
          }
        ],
        stats: [
          {
            "base_stat": 130,
            "effort": 2,
            "stat": {
              "name": "hp",
              "url": "https://pokeapi.co/api/v2/stat/1/"
            }
          },
          {
            "base_stat": 65,
            "effort": 0,
            "stat": {
              "name": "attack",
              "url": "https://pokeapi.co/api/v2/stat/2/"
            }
          },
          {
            "base_stat": 60,
            "effort": 0,
            "stat": {
              "name": "defense",
              "url": "https://pokeapi.co/api/v2/stat/3/"
            }
          },
          {
            "base_stat": 110,
            "effort": 0,
            "stat": {
              "name": "special-attack",
              "url": "https://pokeapi.co/api/v2/stat/4/"
            }
          },
          {
            "base_stat": 95,
            "effort": 0,
            "stat": {
              "name": "special-defense",
              "url": "https://pokeapi.co/api/v2/stat/5/"
            }
          },
          {
            "base_stat": 65,
            "effort": 0,
            "stat": {
              "name": "speed",
              "url": "https://pokeapi.co/api/v2/stat/6/"
            }
          }
        ]
    }),
    new Pokemon({
        id: 145,
        name: "zapdos",
        height: 16,
        weight: 526,
        sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/145.png",
        types: [
          {
            "slot": 1,
            "type": {
              "name": "electric",
              "url": "https://pokeapi.co/api/v2/type/13/"
            }
          },
          {
            "slot": 2,
            "type": {
              "name": "flying",
              "url": "https://pokeapi.co/api/v2/type/3/"
            }
          }
        ],
        stats: [
          {
            "base_stat": 90,
            "effort": 0,
            "stat": {
              "name": "hp",
              "url": "https://pokeapi.co/api/v2/stat/1/"
            }
          },
          {
            "base_stat": 90,
            "effort": 0,
            "stat": {
              "name": "attack",
              "url": "https://pokeapi.co/api/v2/stat/2/"
            }
          },
          {
            "base_stat": 85,
            "effort": 0,
            "stat": {
              "name": "defense",
              "url": "https://pokeapi.co/api/v2/stat/3/"
            }
          },
          {
            "base_stat": 125,
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
            "base_stat": 100,
            "effort": 0,
            "stat": {
              "name": "speed",
              "url": "https://pokeapi.co/api/v2/stat/6/"
            }
          }
        ]
    }),
    new Pokemon({
        abilities: [
          {
            "ability": {
              "name": "pressure",
              "url": "https://pokeapi.co/api/v2/ability/46/"
            },
            "is_hidden": false,
            "slot": 1
          },
          {
            "ability": {
              "name": "unnerve",
              "url": "https://pokeapi.co/api/v2/ability/127/"
            },
            "is_hidden": true,
            "slot": 3
          }
        ],
        id: 150,
        name: "mewtwo",
        height: 20,
        moves: [
          {
            "move": {
              "name": "mega-punch",
              "url": "https://pokeapi.co/api/v2/move/5/"
            },
          },
          {
            "move": {
              "name": "pay-day",
              "url": "https://pokeapi.co/api/v2/move/6/"
            },
          },
          {
            "move": {
              "name": "fire-punch",
              "url": "https://pokeapi.co/api/v2/move/7/"
            },
          },
          {
            "move": {
              "name": "ice-punch",
              "url": "https://pokeapi.co/api/v2/move/8/"
            },
          }
        ],
        weight: 1220,
        sprites: {  
          other: {
            home: {
              front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/150.png",
            },
          },           
        },
        types: [
            {
                "slot": 1,
                "type": {
                  "name": "psychic",
                  "url": "https://pokeapi.co/api/v2/type/14/"
                }
            },
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
        ],
    }),
]