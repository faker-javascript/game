import path from 'node:path';
import fs from 'node:fs';
import {loadJsonFileSync} from 'load-json-file';

class Game {
    titles = {};
    genres = {};
    platforms = {};
    defaultLocale = 'en_US';
    options = {};

    constructor(options) {
        this.options = options || {};
        const titleFilePath = `./locales/${this.options.locale || this.defaultLocale}/title.json`;
        const platformFilePath = `./locales/${this.options.locale || this.defaultLocale}/platform.json`;
        const genreFilePath = `./locales/${this.options.locale || this.defaultLocale}/genre.json`;
        this.titles = fs.existsSync(path.resolve(titleFilePath)) ? loadJsonFileSync(titleFilePath) : loadJsonFileSync(path.resolve('node_modules/@fakerjs/game/', titleFilePath));
        this.platforms = fs.existsSync(path.resolve(platformFilePath)) ? loadJsonFileSync(platformFilePath) : loadJsonFileSync(path.resolve('node_modules/@fakerjs/game/', platformFilePath));
        this.genres = fs.existsSync(path.resolve(genreFilePath)) ? loadJsonFileSync(genreFilePath) : loadJsonFileSync(path.resolve('node_modules/@fakerjs/game/', genreFilePath));
    }

    _selectRandom(items) {
        return items[Math.floor(Math.random() * items.length)];
    }

    title() {
        return this._selectRandom(this.titles);
    }

    genre() {
        return this._selectRandom(this.genres);
    }

    platform() {
        return this._selectRandom(this.platforms);
    }
}

export default function game(options) {
    return new Game(options);
}
