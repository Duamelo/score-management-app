import HttpException from "adapter/exceptions/HttpException";
import PlayerDTO from "domain/dto/player.dto";
import Player from "domain/entity/player";
import IRepository from "domain/interfaces/repository.interface";

export default class PlayerService{
    private readonly playerRepository: IRepository;
    private readonly teamRepository:  IRepository;

    constructor(playerRepository: IRepository, teamRepository: IRepository){
        this.playerRepository = playerRepository;
        this.teamRepository = teamRepository;
    }

    private register = async (player: PlayerDTO) =>{
        let playerExist = await this.playerRepository.findBy({username: player.username});

        if (playerExist.length)
            throw new HttpException(404, "This player with that username already exist");
        let team = await this.teamRepository.findBy({id: player.teamId});

        if (team.length){
            let newPlayer =  new Player(player.username, player.role, team);
            await this.playerRepository.save(newPlayer);
        }
    }

    private getAllPlayersForATeam = async (teamName:string) =>{
        return await this.playerRepository.find({
            relation: {
                team: true
            },
            where: {
                team: {
                    name: teamName
                }
            }
        })
    }

    private getAllPlayers = async ()=>{
        return await this.playerRepository.find();
    }

    private getPlayerByUsername = async (username: string) =>{
        return await this.playerRepository.findBy({username: username});
    }

    private update = async (player: PlayerDTO)=>{
        let playerExist = await this.playerRepository.findBy({username: player.username});

        if (playerExist.length)
            throw new HttpException(404, "This player does not exist");
        let team = await this.teamRepository.findBy({id: player.teamId});

        if (team.length){
            let newPlayer =  new Player(player.username, player.role, team);
            await this.playerRepository.save(newPlayer);
        }
    }

    private remove = async (playerId: number) =>{
        await this.playerRepository.delete(playerId);
    }

}