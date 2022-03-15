import { NamedAPIResource } from "pokenode-ts";

export interface INamedAPIResourceList {
    count?: number;
    next?: string | null;
    previous?: string | null;
    namedApiResources?: NamedAPIResource[];
}

export class NamedAPIResourceList implements INamedAPIResourceList {
    constructor(
        public count?: number,
        public next?: string | null,
        public previous?: string | null,
        public namedApiResources?: NamedAPIResource[]
    ) {}
}