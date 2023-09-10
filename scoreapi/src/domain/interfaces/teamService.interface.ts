import TeamDTO from "domain/dto/team.dto";

export default interface ITeamService{
    create(team: TeamDTO);
    update(teamName: string, team: TeamDTO);
    remove(teamId: number);
    getAllTeamsForAGroup(groupId: number);
    getById(teamId:number);
    getByName(teamName: string);
}