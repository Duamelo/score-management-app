import HttpException from "adapter/exceptions/HttpException";
import TournamentDTO from "domain/dto/tournament.dto";
import IRepository from "domain/interfaces/repository.interface";

export default class TournamentService{
    private readonly tournamentRepository: IRepository;
    constructor(tournamentRepository: IRepository){
        this.tournamentRepository = tournamentRepository;
    }

    private create = async (tournament: TournamentDTO)=>{
        let tournamentExist = await this.tournamentRepository.findBy({name: tournament.name});

        if (tournamentExist.length)
            throw new HttpException(404, "This tournament with that name already exist");
        await this.tournamentRepository.save(tournament);
    }

    private update = async (tournament: TournamentDTO) =>{
        let tournamentExist = await this.tournamentRepository.findBy({name: tournament.name});

        if (!tournamentExist.length)
            throw new HttpException(404, "This tournament does not exist");
        await this.tournamentRepository.save(tournament);
    }

    private remove = async (tournamentId: number) =>{
        await this.tournamentRepository.delete(tournamentId);
    }

    private getAllTournaments = async ()=>{
        return await this.tournamentRepository.find();
    }
}