export interface FeatureItem {
  id: number;
  title: string;
  description: string;
  status: string;
  metric: string;
}

export interface KpiItem {
  label: string;
  value: string;
  trend: string;
  tone: string;
}

export interface OperationRecord {
  key: string;
  name: string;
  owner: string;
  status: string;
  metric: string;
  priority: string;
}

export interface OverviewResponse {
  appName: string;
  appCode: string;
  description: string;
  features: FeatureItem[];
  kpis: KpiItem[];
  records: OperationRecord[];
}

export interface PlayerRankItem {
  rank: number;
  playerId: string;
  playerName: string;
  teamName: string;
  avatar: string;
  kills: number;
  survivalTime: number;
  winRate: number;
  rankTier: string;
}

export interface TeamRankItem {
  rank: number;
  teamId: string;
  teamName: string;
  logo: string;
  totalKills: number;
  totalSurvivalTime: number;
  memberCount: number;
  winRate: number;
  rankTier: string;
}

export interface LeaderboardResponse {
  seasonName: string;
  seasonPeriod: string;
  playerKills: PlayerRankItem[];
  playerSurvival: PlayerRankItem[];
  teamKills: TeamRankItem[];
  teamSurvival: TeamRankItem[];
}
