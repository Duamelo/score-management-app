import HttpException from "adapter/exceptions/HttpException";
import TeamDTO from "domain/dto/team.dto";
import Team from "domain/entity/team";
import IRepository from "domain/interfaces/repository.interface";

export default class TeamService{
    private readonly teamRepository: IRepository;
    private readonly groupRepository: IRepository;

    constructor(teamRepository: IRepository){
        this.teamRepository = teamRepository;
    }

    private create = async (team: TeamDTO) =>{
        let teamExist = await this.teamRepository.findBy({name: team.name});

        if (teamExist.length)
            throw new HttpException(404, "this team with that name already exist");
        let group = await this.groupRepository.findBy({id: team.groupId});
        if (group.length){
            let newTeam = new Team(team.name, team.country, group.id);

            await this.teamRepository.save(newTeam);
        }
    }

    private remove = async (teamId: number) =>{
        await this.teamRepository.delete(teamId);
    }


    private update  = async (team: TeamDTO) =>{
        let teamExist = await this.teamRepository.findBy({name: team.name});

        if (teamExist.length)
            throw new HttpException(404, "this team with that name already exist");
        let group = await this.groupRepository.findBy({id: team.groupId});
        if (group.length){
            let newTeam = new Team(team.name, team.country, group);

            await this.teamRepository.save(newTeam);
        }
    }

    private getAllTeamsForAGroup = async (groupId: number)=>{
        let teams = await this.teamRepository.find({
            relations: {
                group: true
            },
            where: {
                group: {
                    id: groupId
                }
            }
        })
        return teams;
    }
}