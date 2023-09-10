import PhaseDTO from 'domain/dto/phase.dto';
import IPhaseService from 'domain/interfaces/phaseService.interface';
import * as express from 'express';
 
export default class PhaseController{
  public path = '/phases';
  public router = express.Router();
  private readonly phaseService: IPhaseService;
 
  constructor(phaseService: IPhaseService) {
    this.phaseService = phaseService;
    this.initializeRoutes();
  }
 
  private initializeRoutes() {
    this.router.post(`${this.path}/`, this.createAPhase);
    this.router.get(`${this.path}/:id`, this.getAPhase);
    this.router.put(`${this.path}/`, this.updateAPhase);
    this.router.delete(`${this.path}/:id`, this.deleteAPhase);
    this.router.get(`${this.path}/tournament/:tournamentId`, this.getPhasesForATournament);
  }
 
  private createAPhase = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
    const phaseData: PhaseDTO = request.body;
    return response.send(this.phaseService.create(phaseData));      
  }
 
  private getAPhase = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
    const phaseId: string = request.params.id;
    return response.send(this.phaseService.getById(Number(phaseId)));
  }

  private updateAPhase = (request: express.Request, response: express.Response) => {
    const phaseData: PhaseDTO = request.body;
    return response.send(this.phaseService.update(phaseData));      
  }

  private deleteAPhase = (request: express.Request, response: express.Response) => {
    const phaseId: string = request.params.id;
    return response.send(this.phaseService.remove(Number(phaseId)));      
  }

  private getPhasesForATournament = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
    const tournamentId: string = request.params.tournamentId;
    return response.send(this.phaseService.getAllPhasesForATournament(Number(tournamentId)));
  }
}