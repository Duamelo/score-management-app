import HttpException from "adapter/exceptions/HttpException";
import MatchDTO from "domain/dto/match.dto";
import Match from "domain/entity/match";
import IRepository from "domain/interfaces/repository.interface";

export default class MatchService{
    private readonly teamRepository: IRepository;
    private readonly phaseRepository: IRepository;
    private readonly matchRepository: IRepository;


    constructor(teamRepository: IRepository, phaseRepository: IRepository, matchRepository: IRepository){
        this.teamRepository = teamRepository;
        this.phaseRepository = phaseRepository;
        this.matchRepository = matchRepository;
    }

    private create = async (match: MatchDTO) =>{
        let matchExist = await this.matchRepository.findBy({code:  match.code});

        if (matchExist.length)
            throw new HttpException(404, 'this match already axists');
        
        let team1 = await this.teamRepository.findBy({id : match.team1Id});
        let team2 = await this.teamRepository.findBy({id : match.team2Id});
        let phase = await this.phaseRepository.find({
            where: {
                id : match.phaseId
            },
            relations: {
                tournament: true
            }
        });

        if (team1.length && team2.length){
            let newMatch = new Match(match.date, match.venue, match.code, team1, team2, phase, match.duration, match.type);

            await this.matchRepository.save(newMatch);
        }
    }

    private update = async (match: MatchDTO) =>{
        let matchExist = await this.matchRepository.findBy({code:  match.code});

        if (matchExist.length)
            throw new HttpException(404, 'this match already axists');
        
        let team1 = await this.teamRepository.findBy({id : match.team1Id});
        let team2 = await this.teamRepository.findBy({id : match.team2Id});
        let phase = await this.phaseRepository.find({
            where: {
                id : match.phaseId
            },
            relations: {
                tournament: true
            }
        });
        if (team1.length && team2.length){
            let newMatch = new Match(match.date, match.venue, match.code, team1, team2, phase, match.duration, match.type);

            await this.matchRepository.save(newMatch);
        }
    }

    private remove = async (matchId: number) =>{
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

    private addWinner = async (matchId: string, teamName: string) =>{
        let teamExist = await this.matchRepository.find({name: teamName});

        if (!teamExist.length)
            throw new HttpException(404, "this team does not exist");
        let match = await this.matchRepository.find({id: matchId});

        if (match.length){
            match.winner = teamName;
            await this.matchRepository.save(match);
            // update point for the winner
        }
    }

    private getMatchById = async (matchId: number) =>{
        return await this.matchRepository.find({id: matchId});
    }
}