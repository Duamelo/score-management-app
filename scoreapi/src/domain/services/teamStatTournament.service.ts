import HttpException from "adapter/exceptions/HttpException";
import TeamStatTournamentDTO from "domain/dto/teamStatTournament.dto";
import TeamStatTournament from "domain/entity/teamStatTournament";
import IRepository from "domain/interfaces/repository.interface"

export default class TeamStatTournamentService{
    private readonly tournamentRepository: IRepository;
    private readonly teamRepository: IRepository;
    private readonly teamStatTournamentRepository: IRepository;
    
    constructor(tournamentRepository: IRepository, teamRepository: IRepository, teamStatTournamentRepository: IRepository){
        this.tournamentRepository = tournamentRepository;
        this.teamRepository = teamRepository;
        this.teamStatTournamentRepository = teamStatTournamentRepository;
    }

    private create = async (teamStat: TeamStatTournamentDTO)=>{
        let teamStatExist = await this.teamStatTournamentRepository.find({
            where: {
                team: {
                    id: teamStat.teamId
                },
                tournament: {
                    id: teamStat.tournamentId
                }
            },
        });

        if (teamStatExist.length)
            throw new HttpException(404, "this statistic already exist");
        
        let team = await this.teamRepository.find({id: teamStat.teamId});
        let tournament = await this.tournamentRepository.find({id: teamStat.tournamentId});

        let newTeamStat = new TeamStatTournament(team, tournament, teamStat.points);
        await this.teamStatTournamentRepository.save(newTeamStat);
    }

    private updatePoints = async (teamStatId: number, teamId: number, tournamentId: number, point: number)=>{
        let team = await this.teamRepository.find({id: teamId});
        let tournament = await this.tournamentRepository.find({id: tournamentId});

        if (!team.length || !tournament.length)
            throw new HttpException(404, "Impossible to perform the operation. Some attributes are missing");
        
        let teamStat = await this.teamStatTournamentRepository.find({
            where: {
                team: {
                    id: teamId
                },
                tournament: {
                    id: tournamentId
                },
                id: teamStatId
            }
        });

        if (teamStat.length){
            teamStat.points = point;
            await this.teamStatTournamentRepository.save(teamStat);
        }
   
    }

    private getAllTeamsForATournament = async (tournamentId: number)=>{
        let teams = await this.teamStatTournamentRepository.find({
            where: {
                tournament: {
                    id: tournamentId
                }
            }
        });
        return teams;
    }

    private removeFromATournament = async (teamId: number, tournamentId: number) =>{
        let team = await this.teamStatTournamentRepository.find({
            where: {
                tournament: {
                    id: tournamentId
                },
                team: {
                    id: teamId
                }
            }
        });
        await this.teamStatTournamentRepository.delete(team.id);
    }

    private getTeamPositionForATournament = async (tournamentId: number) =>{

    }
}