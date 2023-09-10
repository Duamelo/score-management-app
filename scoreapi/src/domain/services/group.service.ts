import HttpException from "adapter/exceptions/HttpException";
import GroupDTO from "domain/dto/group.dto";
import Group from "domain/entity/group";
import IRepository from "domain/interfaces/repository.interface";

export default class GroupService{
    private readonly groupRepository: IRepository;
    private readonly tournamentRepository: IRepository
    constructor(groupRepository: IRepository, tournamentRepository: IRepository){
        this.groupRepository = groupRepository;
        this.tournamentRepository = tournamentRepository;
    }

    public create = async (group: GroupDTO) =>{
        let groupExist = await this.groupRepository.findBy({name: group.name});
         if (groupExist.length)
            throw new HttpException(404, "This group already exist"); 
        let tournament = await this.tournamentRepository.findBy({id: group.tournamentId});

        if (tournament.length){
            let newGroup = new Group(group.name, tournament);

            await this.groupRepository.save(newGroup);
        }
    }

    public update = async (group: GroupDTO) =>{
        let groupExist = await this.groupRepository.findBy({name: group.name});
        if (!groupExist.length)
           throw new HttpException(404, "This group does not exist"); 
       let tournament = await this.tournamentRepository.findBy({id: group.tournamentId});

       if (tournament.length){
           let newGroup = new Group(group.name, tournament);
           await this.groupRepository.save(newGroup);
       }
    }

    public remove = async (groupId: number)=>{
        await this.groupRepository.delete(groupId);
    }

    public getAllGroups = async ()=>{
        return await this.groupRepository.find();
    }

    public getById = async (groupId: number)=>{
        return await this.groupRepository.find({id:groupId});
    }

    public getAllGroupsForATournament = async (tournamentId: number) =>{
        let groups = await this.groupRepository.find({
            relations: {
                tournament: true
            },
            where: {
                tournament: {
                    id: tournamentId
                }
            }
        })
        return groups;
    }
}