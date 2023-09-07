import GroupDTO from "domain/dto/group.dto";

class Team{
    private id?: string;
    private _name: string;
    private _country: string;
    private _group: GroupDTO;

    constructor(name: string, country: string, group: GroupDTO){
        this._name = name;
        this._country = country;
        this._group = group;
    }

    get name(): string {
        return this._name;
    }

    get country(): string{
        return this._country;
    }

    get group(): GroupDTO{
        return this._group;
    }

    
}
export default Team;