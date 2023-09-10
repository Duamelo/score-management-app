import TournamentDTO from "domain/dto/tournament.dto";

export default interface ITournamentService{
    create(tournament: TournamentDTO);
    update(name: string, tournament: TournamentDTO);
    remove(tournamentId: number);
    getAllTournaments();
    getByName(tournamentName: string);
}