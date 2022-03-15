export interface INamedAPIResource {
  name?: string;
  url?: string;
}

export class NamedAPIResource implements INamedAPIResource {
    constructor(
        public name?: string,
        public url?: string
    ) {}
}