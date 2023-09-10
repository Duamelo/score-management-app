import TournamentDTO from 'domain/dto/tournament.dto';
import ITournamentService from 'domain/interfaces/tournamentService.interface';
import * as express from 'express';
 
export default class TournamentController{
  public path = '/tournaments';
  public router = express.Router();
  private readonly tournamentService: ITournamentService;
 
  constructor(tournamentService: ITournamentService) {
    this.tournamentService = tournamentService;
    this.initializeRoutes();
  }
 
  private initializeRoutes() {
    this.router.post(`${this.path}/`, this.createATournament);
    this.router.get(`${this.path}/:name`, this.getTournamentByName);
    this.router.put(`${this.path}/`, this.updateTournament);
    this.router.delete(`${this.path}/:id`, this.deleteTournament);
    this.router.get(`${this.path}/`, this.getAllTournaments);
  }
 
  private createATournament = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
    const tournamentData: TournamentDTO = request.body;
    return response.send(this.tournamentService.create(tournamentData));      
  }
 
  private getTournamentByName = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
    const tounrnamentName: string = request.params.name;
    response.send(this.tournamentService.getByName(tounrnamentName));
  }

  private updateTournament = (request: express.Request, response: express.Response) => {
    const tournamentData: TournamentDTO = request.body;
    response.send(this.tournamentService.update(tournamentData));      
    response.sendStatus(200);
  }

  private deleteTournament = (request: express.Request, response: express.Response) => {
    const tournamentId: string = request.params.id;
    response.send(this.tournamentService.remove(Number(tournamentId)));      
    response.sendStatus(200);
  }

  private getAllTournaments = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
    response.send(this.tournamentService.getAllTournaments());
  }
}