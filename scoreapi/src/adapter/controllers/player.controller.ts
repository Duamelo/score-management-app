import PlayerDTO from 'domain/dto/player.dto';
import IPlayerService from 'domain/interfaces/playerService.interface';
import * as express from 'express';
 
export default class PlayerController{
  public path = '/players';
  public router = express.Router();
  private readonly playerService:  IPlayerService;
 
  constructor(playerService: IPlayerService) {
    this.playerService = playerService;
    this.initializeRoutes();
  }
 
  private initializeRoutes() {
    this.router.post(`${this.path}/`, this.addAPlayer);
    this.router.get(`${this.path}/:username`, this.getAPlayer);
    this.router.put(`${this.path}/`, this.updateAPlayer);
    this.router.delete(`${this.path}/:id`, this.deleteAPlayer);
    this.router.get(`${this.path}/team/:teamId`, this.getPlayersByTeam);
  }
 
  private addAPlayer = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
    const playerData: PlayerDTO = request.body;
    return response.send(this.playerService.register(playerData));      
  }
 
  private getAPlayer = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
    const playerId: string = request.params.id;
    return response.send(this.playerService.getPlayerByUsername(playerId));
  }

  private updateAPlayer = (request: express.Request, response: express.Response) => {
    const playerData: PlayerDTO = request.body;
    return response.send(this.playerService.update(playerData));      
  }

  private deleteAPlayer = (request: express.Request, response: express.Response) => {
    const playerId: string = request.params.id;
    return response.send(this.playerService.remove(Number(playerId)));      
  }

  private getPlayersByTeam = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
    const teamId: string = request.params.tournamentId;
    return response.send(this.playerService.getAllPlayersForATeam(teamId));
  }
}