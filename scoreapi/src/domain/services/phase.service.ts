import PhaseDTO from "domain/dto/phase.dto";
import IRepository from "domain/interfaces/repository.interface";

export default class PhaseService{
    private readonly phaseRepository: IRepository;
    private readonly tournamentRepository: IRepository;

    constructor(phaseRepository: IRepository, tournamentRepository: IRepository){
        this.phaseRepository = phaseRepository;
        this.tournamentRepository = tournamentRepository;
    }

    private create(phase: PhaseDTO){
        
    }

    private update(phase: PhaseDTO){

    }

    private remove(phaseId: number){

    }

    private getAllPhasesForATournament(tournamentId: number){

    }
}