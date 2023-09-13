import MatchDTO from "domain/dto/match.dto";

export default interface IMatchService{
    create(match: MatchDTO);
    update(code: string, match: MatchDTO);
    remove(matchId: number);
    addWinner(matchId: number);
    getById(matchId: number);
    getAllMatchesForATournament(tournamentId: number);
}