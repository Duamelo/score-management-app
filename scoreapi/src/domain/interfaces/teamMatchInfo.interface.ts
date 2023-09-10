import TeamMatchInfoDTO from "domain/dto/teamMatchInfo.dto";

export default interface ITeamMatchInfoService{
    create(teamMatchInfo: TeamMatchInfoDTO);
    updateScore(matchId: number, teamId: number, score: number);
    getTeamMatchInfo(teamId: number, matchId: number);
}