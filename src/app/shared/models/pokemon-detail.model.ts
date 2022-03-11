import { Genus, Pokemon, PokemonSpecies, PokemonSpeciesDexEntry, VerboseEffect } from "pokenode-ts";

export interface IPokemonDetail {
    pokemon?: Pokemon;
    pokemonSpecies?: PokemonSpecies;
    stats?: number[];
    flavorText?: string;
    genus?: Genus;
    pokemonSpeciesDexEntry?: PokemonSpeciesDexEntry;
    evolvesFrom?: string;
    verboseEffects?: VerboseEffect[];
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
        public verboseEffects?: VerboseEffect[]
    ) {}
}