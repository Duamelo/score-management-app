class Team{
    private _name: string;
    private _country: string;

    constructor(name: string, country: string){
        this._name = name;
        this._country = country;
    }

    get name(): string {
        return this._name;
    }

    get country(): string{
        return this._country;
    }
}
export default Team;