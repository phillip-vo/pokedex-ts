export class Pokemon {
    abilities: any[] | undefined;
    id: number | undefined;
    name: string = "";
    height: number | undefined;
    moves: any[] | undefined;
    weight: number | undefined;
    sprites: {} | undefined;
    types: any[] | undefined;
    stats: any[] | undefined;

    constructor(initializer?: any) {
        if (!initializer) return;
        if (initializer.abilities) this.abilities = initializer.abilities;
        if (initializer.id) this.id = initializer.id;
        if (initializer.name) this.name = initializer.name;
        if (initializer.height) this.height = initializer.height;
        if (initializer.moves) this.moves = initializer.moves;
        if (initializer.weight) this.weight = initializer.weight;
        if (initializer.sprites) this.sprites = initializer.sprites;
        if (initializer.types) this.types = initializer.types;
        if (initializer.stats) this.stats = initializer.stats;
    }
}