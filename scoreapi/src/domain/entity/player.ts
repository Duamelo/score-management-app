import TeamDTO from "domain/dto/team.dto";

export default class Player{
    private id?: string;
    private _username: string;
    private _role: string;
    private _team: TeamDTO;

    constructor(username:string, role: string, team: TeamDTO){
        this._username = username;
        this._role = role;
        this._team = team;
    }

    get username(): string{
        return this._username;
    }

    get role(): string{
        return this.role;
    }

    get team(): TeamDTO{
        return this._team;
    }
}