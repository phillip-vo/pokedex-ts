export class Pokemon {
    abilities: any[] | undefined;
    id: number | undefined;
    name: string = "";
    // base_experience: number | undefined;
    height: number | undefined;
    // is_default: boolean | undefined;
    // order: number | undefined;
    weight: number | undefined;
    // abilities: any[] | undefined;
    // forms: any[] | undefined;
    // game_indices: any[] | undefined;
    // held_items: any[] | undefined;
    // location_area_encounters: string = "";
    // moves: any[] | undefined;
    // past_types: any[] | undefined;
    sprites: {} | undefined;
    types: any[] | undefined;
    stats: any[] | undefined;

    constructor(initializer?: any) {
        if (!initializer) return;
        if (initializer.abilities) this.abilities = initializer.abilities;
        if (initializer.id) this.id = initializer.id;
        if (initializer.name) this.name = initializer.name;
        if (initializer.height) this.height = initializer.height;
        if (initializer.weight) this.weight = initializer.weight;
        if (initializer.sprites) this.sprites = initializer.sprites;
        if (initializer.types) this.types = initializer.types;
        if (initializer.stats) this.stats = initializer.stats;
    }
}