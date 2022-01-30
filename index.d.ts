interface Options {
    locale?: string;
}
type Items = Record<string, string>;
declare class Game {
    titles: Items;
    genres: Items;
    platforms: Items;
    defaultLocale: string;
    title(): string;
    genre(): string;
    platform(): string;
    _selectRandom(items: Items): string;
}
export default function game(options?: Options): Game;
