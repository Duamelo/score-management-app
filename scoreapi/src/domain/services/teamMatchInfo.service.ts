import HttpException from "adapter/exceptions/HttpException";
import TeamMatchInfoDTO from "domain/dto/teamMatchInfo.dto";
import TeamMatchInfo from "domain/entity/teamMatchInfo";
import IRepository from "domain/interfaces/repository.interface";

export default class TeamMatchInfoService{
    private readonly teamRepository: IRepository;
    private readonly matchRepository: IRepository;
    private readonly teamMatchInfoRepository: IRepository;

    constructor(teamRepository: IRepository, matchRepository: IRepository, teamMatchInfoRepository: IRepository){
        this.teamMatchInfoRepository = this.teamMatchInfoRepository;
        this.teamRepository = teamRepository;
        this.matchRepository = matchRepository
    }

    public create = async (teamMatchInfo: TeamMatchInfoDTO)=>{
        let teamMatchInfoExist = await this.teamMatchInfoRepository.find({
            where: {
                team: {
                    id: teamMatchInfo.teamId
                },
                match: {
                    id: teamMatchInfo.matchId
                }
            }
        })

        if (teamMatchInfoExist.length)
            throw new HttpException(404, "this information about the team alredy exists");
        
        let team = await this.teamRepository.find({id: teamMatchInfo.teamId});
        let  match = await this.matchRepository.find({id: teamMatchInfo.matchId});

        if(!team.length && !match.length)
            throw new HttpException(404, "Some informations are missing");
        
        let { score} = teamMatchInfo;
        let newTeamMatchInfo = new TeamMatchInfo(score, team, match);
        await this.teamMatchInfoRepository.save(newTeamMatchInfo);
    }

    public updateScore = async (matchId: number, teamId: number, score: number) =>{
        let teamMatchInfoExist = await this.teamMatchInfoRepository.find({
            where: {
                team: {
                    id: teamId
                },
                match: {
                    id: matchId
                }
            }
        })

        if (!teamMatchInfoExist.length)
            throw new HttpException(404, "this information about the team does not exist");
                
        teamMatchInfoExist.score = score;
        await this.teamMatchInfoRepository.save(teamMatchInfoExist);
    }

    public getTeamMatchInfo =  async (teamId: number, matchId: number) =>{
        return await this.teamMatchInfoRepository.find({
            where: {
                team: {
                    id: teamId
                },
                match: {
                    id: matchId
                }
            }
        });
    }
}