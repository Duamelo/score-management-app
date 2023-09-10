import GroupDTO from "domain/dto/group.dto";

export default interface IGroupService{
    create(group:  GroupDTO);
    update(groupName: string, group: GroupDTO);
    remove(groupId: number);
    getAllGroups();
    getById(groupId: number);
    getAllGroupsForATournament(tournamentId: number);
}