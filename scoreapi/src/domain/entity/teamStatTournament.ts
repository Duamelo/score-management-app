import TeamDTO from "domain/dto/team.dto";
import TournamentDTO from "domain/dto/tournament.dto";

export default class TeamStatTournament{
    private id?: string;
    private _points: number;
    private _team: TeamDTO;
    private _tournament: TournamentDTO;

    constructor(team: TeamDTO, tournament: TournamentDTO, points: number){
        this._team = team;
        this._tournament = tournament;
        this._points = points;
    }

    get team(): TeamDTO{
        return this._team;
    }

    get points(): number{
        return this._points;
    }

    get tournament(): TournamentDTO{
        return this._tournament;
    }
}
