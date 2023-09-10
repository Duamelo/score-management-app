export default interface MatchDTO{
    id?: string;
    date:  string;
    venue: string;
    code?: string;
    duration: number;
    team1Id: number;
    team2Id: number;
    phaseId: number;
    type: string; // back and forth
}