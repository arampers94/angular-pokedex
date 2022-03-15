import { 
    ContestComboSets, 
    NamedAPIResource, 
    APIResource, 
    VerboseEffect, 
    AbilityEffectChange, 
    MoveFlavorText,
    MachineVersionDetail,
    MoveMetaData,
    Name,
    PastMoveStatValues,
    MoveStatChange
} from "pokenode-ts";

export interface IMove {
    id?: number | null;
    name?: string;
    accuracy?: number | null;
    effect_chance?: number | null;
    pp?: number | null;
    priority?: number | null;
    power?: number | null;
    contest_combos?: ContestComboSets | null;
    contest_types?: NamedAPIResource | null;
    contest_effect?: APIResource | null;
    damage_class?: NamedAPIResource | null;
    effect_entries?: VerboseEffect[];
    effect_changes?: AbilityEffectChange[];
    flavor_text_entries?: MoveFlavorText[];
    generaton?: NamedAPIResource | null;
    machines?: MachineVersionDetail[];
    meta?: MoveMetaData | null;
    names?: Name[];
    past_values?: PastMoveStatValues[];
    stat_changes?: MoveStatChange[];
    super_contest_effect?: APIResource | null;
    target?: NamedAPIResource | null;
    type?: NamedAPIResource | null;
}

export class Move implements IMove {
    constructor(
        public id?: number | null,
        public name?: string,
        public accuracy?: number | null | null,
        public effect_chance?: number | null,
        public pp?: number | null,
        public priority?: number | null,
        public power?: number | null,
        public contest_combos?: ContestComboSets | null,
        public contest_types?: NamedAPIResource | null,
        public contest_effect?: APIResource | null,
        public damage_class?: NamedAPIResource | null,
        public effect_entries?: VerboseEffect[],
        public effect_changes?: AbilityEffectChange[],
        public flavor_text_entries?: MoveFlavorText[],
        public generaton?: NamedAPIResource | null,
        public machines?: MachineVersionDetail[],
        public meta?: MoveMetaData | null,
        public names?: Name[],
        public past_values?: PastMoveStatValues[],
        public stat_changes?: MoveStatChange[],
        public super_contest_effect?: APIResource | null,
        public target?: NamedAPIResource | null,
        public type?: NamedAPIResource | null
    ) {}
}