import TeamDTO from 'domain/dto/team.dto';
import ITeamService from 'domain/interfaces/teamService.interface';
import * as express from 'express';
 
export default class TeamController{
  public path = '/teams';
  public router = express.Router();
  private readonly teamService: ITeamService;
 
  constructor(teamService: ITeamService) {
    this.teamService = teamService;
    this.initializeRoutes();
  }
 
  private initializeRoutes() {
    this.router.post(`${this.path}/`, this.createATeam);
    this.router.get(`${this.path}/:id`, this.getTeamById);
    this.router.put(`${this.path}/:teamName`, this.updateTeam);
    this.router.delete(`${this.path}/:id`, this.deleteTeam);
    this.router.get(`${this.path}/group/:groupId`, this.getTeamsByGroup);
  }
 
  private createATeam = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
    const teamData: TeamDTO = request.body;
    return response.send(this.teamService.create(teamData));      
  }
 
  private getTeamById = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
    const teamId: string = request.params.id;
    return response.send(this.teamService.getById(Number(teamId)));
  }

  private updateTeam = (request: express.Request, response: express.Response) => {
    const teamData: TeamDTO = request.body;
    const teamName: string = request.params.teamName;
    return response.send(this.teamService.update(teamName, teamData));      
  }

  private deleteTeam = (request: express.Request, response: express.Response) => {
    const teamId: string = request.params.id;
    return response.send(this.teamService.remove(Number(teamId)));      
  }

  private getTeamsByGroup = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
    const groupId: string = request.params.groupId;
    return response.send(this.teamService.getAllTeamsForAGroup(Number(groupId)));
  }
}