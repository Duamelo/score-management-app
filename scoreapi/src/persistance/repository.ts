import TeamMatchInfo from "./model/teamMatchInfo.model";
import Group from "./model/group.model";
import Match from "./model/match.model";
import Phase from "./model/phase.model";
import Player from "./model/player.model";
import Team from "./model/team.model";
import Tournament from "./model/tournament.model";
import { DatabaseConfig } from "./ormconfig";
import Account from "./model/account.model";
import TeamStatTournament from "./model/teamStatTournament.model";

export const teamRepository = DatabaseConfig.getRepository(Team);

export const groupRepository = DatabaseConfig.getRepository(Group);

export const matchRepository = DatabaseConfig.getRepository(Match);

export const phaseRepository = DatabaseConfig.getRepository(Phase);

export const playerRepository = DatabaseConfig.getRepository(Player);

export const teamMatchInfoRepository = DatabaseConfig.getRepository(TeamMatchInfo);

export const teamStatTournamentRepository = DatabaseConfig.getRepository(TeamStatTournament);

export const tournamentRepository = DatabaseConfig.getRepository(Tournament);

export const accountRepository = DatabaseConfig.getRepository(Account);