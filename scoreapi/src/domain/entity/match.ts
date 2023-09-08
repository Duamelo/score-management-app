import PhaseDTO from "domain/dto/phase.dto";
import TeamDTO from "domain/dto/team.dto";
import TournamentDTO from "domain/dto/tournament.dto";

export default class Match{
    private id?: string;
    private _date: string;
    private _venue: string;
    private _code: string;
    private _team1: TeamDTO;
    private _team2:  TeamDTO;
    private _phase: PhaseDTO;
    private _tournament: TournamentDTO;
    private _duration: number;
    private _type: string;

    constructor(date: string, venue: string, code: string, team1: TeamDTO, team2: TeamDTO, phase:  PhaseDTO, tournament: TournamentDTO, duration: number, type: string){
        this._date = date;
        this._venue = venue;
        this._code = code;
        this._team1 = team1;
        this._team2 = team2;
        this._phase = phase;
        this._tournament = tournament;
        this._duration = duration;
        this._type = type;
    }

    get date(): string{
        return this._date;
    }

    get venue(): string{
        return this._venue;
    }

    get code(): string{
        return this._code;
    }

    get team1(): TeamDTO{
        return this._team1;
    }

    get team2(): TeamDTO{
        return this._team2;
    }

    get phase(): PhaseDTO{
        return this._phase;
    }

    get tournament(): TournamentDTO{
        return this._tournament;
    }

    get duration(): number{
        return this._duration;
    }
    get type(): string{
        return this._type;
    }
}