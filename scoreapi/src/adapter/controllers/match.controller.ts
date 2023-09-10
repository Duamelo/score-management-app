import MatchDTO from 'domain/dto/match.dto';
import IMatchService from 'domain/interfaces/match.interface';
import * as express from 'express';
 
export default class MatchController{
  public path = '/matches';
  public router = express.Router();
  private readonly matchService: IMatchService;
 
  constructor(matchService: IMatchService) {
    this.matchService = matchService;
    this.initializeRoutes();
  }
 
  private initializeRoutes() {
    this.router.post(`${this.path}/`, this.createMatch);
    this.router.get(`${this.path}/:id`, this.getAMatch);
    this.router.put(`${this.path}/:matchCode`, this.updateAMatch);
    this.router.delete(`${this.path}/:id`, this.deleteAMatch);
    this.router.get(`${this.path}/tournament/:tournamentId`, this.getMatchesByTournament);
  }
 
  private createMatch = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
    const matchData: MatchDTO = request.body;
    return response.send(this.matchService.create(matchData));      
  }
 
  private getAMatch = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
    const matchId: string = request.params.id;
    return response.send(this.matchService.getById(Number(matchId)));
  }

  private updateAMatch = (request: express.Request, response: express.Response) => {
    const matchData: MatchDTO = request.body;
    const matchCode: string = request.params.matchCode;
    return response.send(this.matchService.update(matchCode, matchData));      
  }

  private deleteAMatch = (request: express.Request, response: express.Response) => {
    const matchId: string = request.params.id;
    return response.send(this.matchService.remove(Number(matchId)));      
  }

  private getMatchesByTournament = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
    const tournamentId: string = request.params.tournamentId;
    return response.send(this.matchService.getAllMatchesForATournament(Number(tournamentId)));
  }
}