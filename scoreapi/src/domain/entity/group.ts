import TournamentDTO from "domain/dto/tournament.dto";

 
export default class Group {
  private id?: string;
 
  private _name: string;

  private _tournament: TournamentDTO;

  constructor(name: string, tournament: TournamentDTO){
    this._name = name;
    this._tournament = tournament;
  }

  get name(){
    return this._name;
  }

  get tournament(){
    return this._tournament;
  }
}