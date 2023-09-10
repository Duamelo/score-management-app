import PlayerDTO from "domain/dto/player.dto";

export default interface IPlayerService{
    register(player: PlayerDTO);
    update(username: string, player: PlayerDTO);
    getAllPlayersForATeam(teamName: string);
    getAllPlayers();
    getPlayerByUsername(username: string);
    remove(playerId: number);
}