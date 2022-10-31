export class Pokemon {
    id: number | undefined;
    name: string = '';
    height: number | undefined;
    weight: number | undefined;
    sprite: string = "";

    constructor(initializer?: any) {
        if (!initializer) return;
        if (initializer.id) this.id = initializer.id;
        if (initializer.name) this.name = initializer.name;
        if (initializer.height) this.height = initializer.height;
        if (initializer.weight) this.weight = initializer.weight;
        if (initializer.sprite) this.sprite = initializer.sprite;
    }
}