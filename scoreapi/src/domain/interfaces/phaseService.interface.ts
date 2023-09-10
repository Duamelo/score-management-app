import PhaseDTO from "domain/dto/phase.dto";

export default interface IPhaseService{
    create(phase: PhaseDTO);
    update(phase: PhaseDTO);
    remove(phaseId: number);
    getById(phaseId: number);
    getAllPhasesForATournament(tournamentId: number);
}