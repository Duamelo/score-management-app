import MatchDTO from "domain/dto/match.dto";
import TeamDTO from "domain/dto/team.dto";

export default class TeamMatchInfo{
    private id?: string;
    private _date: string;
    private _score: number;
    private _team: TeamDTO;
    private _match: MatchDTO

    constructor(date: string, score: number, team: TeamDTO, match: MatchDTO){
        this._date = date;
        this._score = score;
        this._team = team;
        this._match = match;
    }

    get date(): string{
        return this._date;
    }

    get score(): number{
        return this._score;
    }

    get team(): TeamDTO{
        return this._team;
    }

    get match(): MatchDTO{
        return this._match;
    }
}