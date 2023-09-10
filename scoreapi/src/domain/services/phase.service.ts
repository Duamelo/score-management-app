import HttpException from "adapter/exceptions/HttpException";
import PhaseDTO from "domain/dto/phase.dto";
import Phase from "domain/entity/phase";
import IRepository from "domain/interfaces/repository.interface";

export default class PhaseService{
    private readonly phaseRepository: IRepository;
    private readonly tournamentRepository: IRepository;

    constructor(phaseRepository: IRepository, tournamentRepository: IRepository){
        this.phaseRepository = phaseRepository;
        this.tournamentRepository = tournamentRepository;
    }

    public create = async (phase: PhaseDTO)=>{
        let phaseExist = await this.phaseRepository.findBy({name: phase.name});

        if (phaseExist.length)
            throw new HttpException(404, "this phase already exists");
        let tournament = await this.tournamentRepository.findBy({id: phase.tournamentId});

        if (tournament.length){
            let newPhase = new Phase(phase.name, phase.description, tournament);
            await this.phaseRepository.save(newPhase);
        }
    }

    public update = async (phase: PhaseDTO) =>{
        let phaseExist = await this.phaseRepository.findBy({name: phase.name});

        if (phaseExist.length)
            throw new HttpException(404, "this phase does not exist");
        let tournament = await this.tournamentRepository.findBy({id: phase.tournamentId});

        if (tournament.length){
            let newPhase = new Phase(phase.name, phase.description, tournament);
            await this.phaseRepository.save(newPhase);
        }
    }

    public remove = async (phaseId: number) =>{
        await this.phaseRepository.delete(phaseId);
    }

    public getById = async (phaseId: number) =>{
        return await this.phaseRepository.find({
            where: {
                id: phaseId
            },
            relations: {
                tournament: true
            }
        });
    }

    public getAllPhasesForATournament = async (tournamentId: number) =>{
        return await this.phaseRepository.find({
            relations: {
                tournament: true
            },
            where: {
                tournament:{
                    id: tournamentId
                }
            }
        })
    }
}