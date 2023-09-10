import TeamStatTournamentDTO from "domain/dto/teamStatTournament.dto";

export default interface ITeamStatTournamentService{
    create(teamStat: TeamStatTournamentDTO)
    updatePoints(teamId: number, tournamentId: number, point: number);
    getAllTeamsForATournament(tournamentId:  number);
    removeFromATournament(teamId: number, tournamentId: number);
    getTeamPositionForATournament(tournamentId: number);
    getTeamStatTournament(teamId: number, tournamentId: number);
}