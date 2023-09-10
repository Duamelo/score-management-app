
import 'reflect-metadata';
import 'dotenv/config';
import {DatabaseConfig} from './persistance/ormconfig';
import validateEnv from './utils/validateEnv';
import * as jwt from 'jsonwebtoken';
import App from './app';

// repositories import
import { accountRepository, groupRepository, matchRepository, 
  phaseRepository, playerRepository, teamMatchInfoRepository, 
  teamRepository, teamStatTournamentRepository, 
  tournamentRepository } from './persistance/repository';

// services import
import AuthenticationService from './domain/services/authentication.service';
import TournamentService from './domain/services/tournament.service';
import GroupService from './domain/services/group.service';
import PhaseService from './domain/services/phase.service';
import TeamService from 'domain/services/team.service';
import PlayerService from 'domain/services/player.service';
import MatchService from 'domain/services/match.service';
import TeamMatchInfoService from 'domain/services/teamMatchInfo.service';
import TeamStatTournamentService from 'domain/services/teamStatTournament.service';

// controllers import
import AuthenticationController from './adapter/controllers/authentication.controller';
import TournamentController from './adapter/controllers/tournament.controller';
import GroupController from 'adapter/controllers/group.controller';
import PhaseController from 'adapter/controllers/phase.controller';
import TeamController from 'adapter/controllers/team.controller';
import PlayerController from 'adapter/controllers/player.controller';
import MatchController from 'adapter/controllers/match.controller';
 
validateEnv();
 
(async () => {
  try {
    await DatabaseConfig.initialize();

  } catch (error) {
    console.log('Error while connecting to the database', error);
    return error;
  }

  // Services instanciation
  const authenticationService = new AuthenticationService(accountRepository, jwt);
  const tournamentService = new TournamentService(tournamentRepository);
  const groupService = new GroupService(groupRepository, tournamentRepository);
  const phaseService = new PhaseService(phaseRepository, tournamentRepository);
  const teamService = new TeamService(teamRepository, groupRepository, teamStatTournamentRepository);
  const playerService = new PlayerService(playerRepository, teamRepository);
  const teamMatchInfoService = new TeamMatchInfoService(teamRepository, matchRepository, 
    teamMatchInfoRepository);
  const teamStatTournamentService = new TeamStatTournamentService(tournamentRepository, 
    teamRepository, teamStatTournamentRepository);
  const matchService = new MatchService(matchRepository, teamService, phaseService, 
    teamMatchInfoService, teamStatTournamentService);

  const app = new App(
    [
        new AuthenticationController(authenticationService),
        new TournamentController(tournamentService),
        new GroupController(groupService),
        new PhaseController(phaseService),
        new TeamController(teamService),
        new PlayerController(playerService),
        new MatchController(matchService)
    ],
    process.env.PORT
  );
  app.listen();
})();