import TournamentDTO from "domain/dto/tournament.dto";

export default class Phase{
    private  _name: string;
    private _description: string;
    private _tournament: TournamentDTO;

    constructor(name: string, description: string, tournament: TournamentDTO){
        this._name = name;
        this._description = description;
        this._tournament = tournament;
    }

    get name(): string{
        return this._name;
    }

    get description(): string{
        return this._description;
    }

    get tournament(): TournamentDTO{
        return this._tournament;
    }
}