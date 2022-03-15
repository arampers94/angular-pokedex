import { Genus, Pokemon, PokemonSpecies, PokemonSpeciesDexEntry, Type, VerboseEffect } from "pokenode-ts";

export interface IPokemonDetail {
    pokemon?: Pokemon;
    pokemonSpecies?: PokemonSpecies;
    stats?: number[];
    flavorText?: string;
    genus?: Genus;
    pokemonSpeciesDexEntry?: PokemonSpeciesDexEntry;
    evolvesFrom?: string;
    verboseEffects?: VerboseEffect[];
    entryNumber?: number;
    types?: Type[];
}

export class PokemonDetail implements IPokemonDetail {
    constructor(
        public pokemon?: Pokemon,
        public pokemonSpecies?: PokemonSpecies,
        public stats?: number[],
        public flavorText?: string,
        public genus?: Genus,
        public pokemonSpeciesDexEntry?: PokemonSpeciesDexEntry,
        public evolvesFrom?: string,
        public verboseEffects?: VerboseEffect[],
        public entryNumber?: number,
        public types?: Type[]
    ) {}
}