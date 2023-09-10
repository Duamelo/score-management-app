import HttpException from "adapter/exceptions/HttpException";
import MatchDTO from "domain/dto/match.dto";
import TeamMatchInfoDTO from "domain/dto/teamMatchInfo.dto";
import Match from "domain/entity/match";
import IPhaseService from "domain/interfaces/phaseService.interface";
import IRepository from "domain/interfaces/repository.interface";
import ITeamMatchInfoService from "domain/interfaces/teamMatchInfo.interface";
import ITeamService from "domain/interfaces/teamService.interface";
import ITeamStatTournamentService from "domain/interfaces/teamStatTournament.interface";

export default class MatchService{
    private readonly matchRepository: IRepository;

    private readonly teamService: ITeamService;
    private readonly phaseService: IPhaseService;
    private readonly teamMatchInfoService: ITeamMatchInfoService;
    private readonly teamStatTournamentService: ITeamStatTournamentService;


    constructor(
        matchRepository: IRepository, 
        teamService: ITeamService, 
        phaseService: IPhaseService, 
        teamMatchInfoService: ITeamMatchInfoService,
        teamStatTournamentService: ITeamStatTournamentService){

        this.matchRepository = matchRepository;
        this.phaseService = phaseService;
        this.teamService = teamService;
        this.teamMatchInfoService = teamMatchInfoService;
        this.teamStatTournamentService = teamStatTournamentService;
    }

    public create = async (match: MatchDTO) =>{
        let matchExist = await this.matchRepository.findBy({code:  match.code});

        if (matchExist.length)
            throw new HttpException(404, 'this match already axists');
        
        let team1 = await this.teamService.getById(match.team1Id);
        let team2 = await this.teamService.getById(match.team2Id);
        let phase = await this.phaseService.getById(match.phaseId);

        if (team1.length && team2.length){
            let newMatch = new Match(match.date, match.venue, match.code, team1, team2, phase, match.duration, match.type);

            await this.matchRepository.save(newMatch);

            let teamMatchInfoData1: TeamMatchInfoDTO;
            teamMatchInfoData1.matchId = matchExist.id;
            teamMatchInfoData1.teamId = team1.id;

            let teamMatchInfoData2: TeamMatchInfoDTO;
            teamMatchInfoData2.matchId = matchExist.id;
            teamMatchInfoData2.teamId = team2.id

            this.teamMatchInfoService.create(teamMatchInfoData1);
            this.teamMatchInfoService.create(teamMatchInfoData2);
        }
    }

    public update = async (code: string, match: MatchDTO) =>{
        let matchExist = await this.matchRepository.findBy({code: code});

        if (!matchExist.length)
            throw new HttpException(404, 'this match does not axist');
        
        let team1 = await this.teamService.getById(match.team1Id);
        let team2 = await this.teamService.getById(match.team2Id);
        let phase = await this.phaseService.getById(match.phaseId);

        if (team1.length && team2.length){
            let newMatch = new Match(match.date, match.venue, match.code, team1, team2, phase, match.duration, match.type);

            await this.matchRepository.save(newMatch);

            let teamMatchInfoData1: TeamMatchInfoDTO;
            teamMatchInfoData1.matchId = matchExist.id;
            teamMatchInfoData1.teamId = team1.id;

            let teamMatchInfoData2: TeamMatchInfoDTO;
            teamMatchInfoData2.matchId = matchExist.id;
            teamMatchInfoData2.teamId = team2.id

            this.teamMatchInfoService.create(teamMatchInfoData1);
            this.teamMatchInfoService.create(teamMatchInfoData2);
        }
    }

    public remove = async (matchId: number) =>{
        let matchExist = await this.matchRepository.find({
            where: {
                id: matchId
            },
            relations: {
                team1: true,
                team2: true,
                phase: true,
                tournament: true
            }
        });

        if (matchExist.team1.id || matchExist.team2.id || matchExist.phase.id)
            throw new HttpException(404, "this match cannot be deleted");
        await this.matchRepository.delete(matchId);
    }

    public addWinner = async (matchId: number) =>{
        let match = await this.matchRepository.find({
            where: {
                id: matchId,
                relations: {
                    team1: true,
                    team2: true,
                    phase: true
                }
            }
        });
        let phase = await this.phaseService.getById(match.phase.id); // for getting the tournament

        if (!match.length)
            throw new HttpException(404, "this match does not exist");

        let team1 = await this.teamService.getById(match.team1.id);
        let team2 = await this.teamService.getById(match.team2.id);

        let team1MatchInfo = await this.teamMatchInfoService.getTeamMatchInfo(team1.id, matchId);

        let team2MatchInfo = await this.teamMatchInfoService.getTeamMatchInfo(team2.id, matchId);

        if (team1MatchInfo.score < team2MatchInfo.score){
            match.winner = team2.name;
            await this.teamStatTournamentService.updatePoints(team2.id, phase.tournament.id, 3);
        }   
        else if (team1MatchInfo.score > team2MatchInfo.score){
            match.winner = team1.name;
            await this.teamStatTournamentService.updatePoints(team1.id, phase.tournament.id, 3);
        }
        else {
            match.winner = "null";
            await this.teamStatTournamentService.updatePoints(team1.id, phase.tournament.id, 1);
            await this.teamStatTournamentService.updatePoints(team1.id, phase.tournament.id, 3);
        }
        await this.matchRepository.save(match);
    }

    public getById = async (matchId: number) =>{
        return await this.matchRepository.find({id: matchId});
    }

    public getAllMatchesForATournament = async (tournamentId: number) =>{
        return await this.matchRepository.find({
            where: {
                phase: {
                    tournament: tournamentId
                }
            }
        });
    }
}