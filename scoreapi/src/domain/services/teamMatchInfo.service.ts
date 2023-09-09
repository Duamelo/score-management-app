import HttpException from "adapter/exceptions/HttpException";
import TeamMatchInfoDTO from "domain/dto/teamMatchInfo.dto";
import TeamMatchInfo from "domain/entity/teamMatchInfo";
import IRepository from "domain/interfaces/repository.interface";

export default class TeamMatchInfoService{
    private readonly teamRepository: IRepository;
    private readonly matchRepository: IRepository;
    private readonly teamMatchInfoRepository: IRepository;

    constructor(teamRepository: IRepository, matchRepository: IRepository, eamMatchInfoRepository: IRepository){
        this.teamMatchInfoRepository = this.teamMatchInfoRepository;
        this.teamRepository = teamRepository;
        this.matchRepository = matchRepository
    }

    private create = async (teamMatchInfo: TeamMatchInfoDTO)=>{
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

    private update = async (teamMatchInfo: TeamMatchInfoDTO) =>{
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

        if (!teamMatchInfoExist.length)
            throw new HttpException(404, "this information about the team alredy does not exist");
        
        let team = await this.teamRepository.find({id: teamMatchInfo.teamId});
        let  match = await this.matchRepository.find({id: teamMatchInfo.matchId});
        
        let { score} = teamMatchInfo;
        let newTeamMatchInfo = new TeamMatchInfo(score, team, match);
        await this.teamMatchInfoRepository.save(newTeamMatchInfo);
    }
}