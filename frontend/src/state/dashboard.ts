import { localFeatures, localKpis, operationRecords, localPlayerKills, localPlayerSurvival, localTeamKills, localTeamSurvival } from "../data/workbench";
import type { OverviewResponse, LeaderboardResponse } from "../types";
import { APP_CODE, APP_NAME } from "../constants/app";

export function createFallbackOverview(): OverviewResponse {
  return {
    appName: APP_NAME,
    appCode: APP_CODE,
    description: "面向真人CS/野战拓展基地，提供场地预约、战队对战和装备租赁管理的综合平台。",
    features: localFeatures,
    kpis: localKpis,
    records: operationRecords,
  };
}

export function createFallbackLeaderboard(): LeaderboardResponse {
  return {
    seasonName: "2024夏季联赛",
    seasonPeriod: "2024.06.01 - 2024.08.31",
    playerKills: localPlayerKills,
    playerSurvival: localPlayerSurvival,
    teamKills: localTeamKills,
    teamSurvival: localTeamSurvival,
  };
}
