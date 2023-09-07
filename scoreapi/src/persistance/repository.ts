import TeamMatchInfo from "./model/TeamMatchInfo.model";
import Group from "./model/group.model";
import Match from "./model/match.model";
import Phase from "./model/phase.model";
import Player from "./model/player.model";
import Team from "./model/team.model";
import Tournament from "./model/tournament.model";
import { DatabaseConfig } from "./ormconfig";

export const teamRepository = DatabaseConfig.getRepository(Team);

export const groupRepository = DatabaseConfig.getRepository(Group);

export const matchRepository = DatabaseConfig.getRepository(Match);

export const phaseRepository = DatabaseConfig.getRepository(Phase);

export const playerRepository = DatabaseConfig.getRepository(Player);

export const teamMatchInfoRepository = DatabaseConfig.getRepository(TeamMatchInfo);

export const tournamentRepository = DatabaseConfig.getRepository(Tournament);