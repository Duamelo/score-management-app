import TeamDto from 'domain/dto/team.dto';
import Team from '../entity/team';

class TeamAssembler{
    createTeamDto(team: Team){
        let teamDto: TeamDto;

        teamDto.name = team.name;
        teamDto.country = team.country;
        return teamDto;
    }

    createTeam(teamDto: TeamDto){
        let team: Team = new Team(teamDto.name, teamDto.country);
        return team;
    }
}

export default TeamAssembler;