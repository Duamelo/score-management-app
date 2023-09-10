import GroupDTO from 'domain/dto/group.dto';
import IGroupService from 'domain/interfaces/group.interface';
import * as express from 'express';
 
export default class GroupController{
  public path = '/groups';
  public router = express.Router();
  private readonly groupService:IGroupService;
 
  constructor(groupService: IGroupService) {
    this.groupService = groupService;
    this.initializeRoutes();
  }
 
  private initializeRoutes() {
    this.router.post(`${this.path}/`, this.createAGroup);
    this.router.get(`${this.path}/:id`, this.getAGroup);
    this.router.put(`${this.path}/`, this.updateGroup);
    this.router.delete(`${this.path}/:id`, this.deleteGroup);
    this.router.get(`${this.path}/tournament/:tournamentId`, this.getGroupsForATournament);
  }
 
  private createAGroup = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
    const groupData: GroupDTO = request.body;
    return response.send(this.groupService.create(groupData));      
  }
 
  private getAGroup = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
    const groupId: string = request.params.id;
    return response.send(this.groupService.getById(Number(groupId)));
  }

  private updateGroup = (request: express.Request, response: express.Response) => {
    const groupData: GroupDTO = request.body;
    return response.send(this.groupService.update(groupData));      
  }

  private deleteGroup = (request: express.Request, response: express.Response) => {
    const groupId: string = request.params.id;
    return response.send(this.groupService.remove(Number(groupId)));      
  }

  private getGroupsForATournament = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
    const tournamentId: string = request.params.tournamentId;
    return response.send(this.groupService.getAllGroupsForATournament(Number(tournamentId)));
  }
}