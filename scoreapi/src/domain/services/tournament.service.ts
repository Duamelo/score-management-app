import HttpException from "../../adapter/exceptions/HttpException";
import TournamentDTO from "../dto/tournament.dto";
import IRepository from "../interfaces/repository.interface";

export default class TournamentService{
    private readonly tournamentRepository: IRepository;
    constructor(tournamentRepository: IRepository){
        this.tournamentRepository = tournamentRepository;
    }

    public create = async (tournament: TournamentDTO)=>{
        let tournamentExist = await this.tournamentRepository.findBy({name: tournament.name});

        if (tournamentExist.length)
            throw new HttpException(404, "This tournament with that name already exist");
        await this.tournamentRepository.save(tournament);
    }

    public update = async (tournament: TournamentDTO) =>{
        let tournamentExist = await this.tournamentRepository.findBy({name: tournament.name});

        if (!tournamentExist.length)
            throw new HttpException(404, "This tournament does not exist");
        await this.tournamentRepository.save(tournament);
    }

    public remove = async (tournamentId: number) =>{
        await this.tournamentRepository.delete(tournamentId);
    }

    public getAllTournaments = async ()=>{
        return await this.tournamentRepository.find();
    }

    public getByName = async (tounrnamentName: string)=>{
        return await this.tournamentRepository.findBy({name: tounrnamentName});
    }
}