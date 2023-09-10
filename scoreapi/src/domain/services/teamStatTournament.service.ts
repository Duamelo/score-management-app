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

    public create = async (teamStat: TeamStatTournamentDTO)=>{
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

    public updatePoints = async (teamId: number, tournamentId: number, point: number)=>{
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
            }
        });

        if (teamStat.length){
            teamStat.points += point;
            await this.teamStatTournamentRepository.save(teamStat);
        }
    }

    public getAllTeamsForATournament = async (tournamentId: number)=>{
        let teamStats = await this.teamStatTournamentRepository.find({
            where: {
                tournament: {
                    id: tournamentId
                }
            },
            relations: {
                team: true
            }
        });
        let teams = [];
        teamStats.map((tstat)=>{
            teams.push(tstat.team);
        })
        return teams;
    }

    public removeFromATournament = async (teamId: number, tournamentId: number) =>{
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


    public getTeamStatTournament = async (teamId: number, tournamentId: number) =>{
        return await this.teamStatTournamentRepository.find({
            where: {
                tournament: {
                    id: tournamentId
                },
                team: {
                    id: teamId
                }
            }
        });
    }
    public getTeamPositionForATournament = async (tournamentId: number) =>{

    }
}