import HttpException from "adapter/exceptions/HttpException";
import TeamDTO from "domain/dto/team.dto";
import TeamStatTournamentDTO from "domain/dto/teamStatTournament.dto";
import Team from "domain/entity/team";
import IRepository from "domain/interfaces/repository.interface";
import ITeamStatTournamentService from "domain/interfaces/teamStatTournament.interface";

export default class TeamService{
    private readonly teamRepository: IRepository;
    private readonly groupRepository: IRepository;
    private readonly teamStatTournamentService: ITeamStatTournamentService;

    constructor(teamRepository: IRepository, 
        groupRepository:  IRepository,
        teamStatTournamentService: ITeamStatTournamentService){
        this.teamRepository = teamRepository;
        this.groupRepository = groupRepository;
        this.teamStatTournamentService = teamStatTournamentService;
    }

    public create = async (team: TeamDTO) =>{
        let teamExist = await this.teamRepository.findBy({name: team.name});

        if (teamExist.length)
            throw new HttpException(404, "this team with that name already exist");
        let group = await this.groupRepository.find({
            where: {
                id: team.groupId
            },
            relations: {
                tournament: true
            }
        });
        if (group.length){
            let newTeam = new Team(team.name, team.country, group[0].id);

            await this.teamRepository.save(newTeam);

            let _team = this.getByName(team.name);
            let teamStat:TeamStatTournamentDTO = {
                points: 0,
                teamId: _team[0].id,
                tournamentId: group.tournament.id
            };
            await this.teamStatTournamentService.create(teamStat);
        }
    }

    public remove = async (teamId: number) =>{
        await this.teamRepository.delete(teamId);
    }


    public update  = async (teamName:string, team: TeamDTO) =>{
        let teamExist = await this.teamRepository.findBy({name: teamName});

        if (teamExist.length)
            throw new HttpException(404, "this team with that name already exist");
        let group = await this.groupRepository.findBy({id: team.groupId});
        if (group.length){
            let newTeam = new Team(team.name, team.country, group);

            await this.teamRepository.save(newTeam);
        }
    }

    public getAllTeamsForAGroup = async (groupId: number)=>{
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

    public getById = async (teamId: number) =>{
        return await this.teamRepository.find({id: teamId});
    }

    public getByName = async (teamName: string) =>{
        return await this.teamRepository.find({name: teamName});
    }
}