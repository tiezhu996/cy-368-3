import type { FeatureItem, KpiItem, OperationRecord, PlayerRankItem, TeamRankItem } from "../types";

export const localPlayerKills: PlayerRankItem[] = [
  {
    rank: 1,
    playerId: "p001",
    playerName: "影子刺客",
    teamName: "幽灵战队",
    avatar: "🦅",
    kills: 328,
    survivalTime: 8940,
    winRate: 78,
    rankTier: "战神"
  },
  {
    rank: 2,
    playerId: "p002",
    playerName: "猎鹰",
    teamName: "战狼突击队",
    avatar: "🐺",
    kills: 312,
    survivalTime: 8520,
    winRate: 75,
    rankTier: "战神"
  },
  {
    rank: 3,
    playerId: "p003",
    playerName: "毒蛇",
    teamName: "蝰蛇小队",
    avatar: "🐍",
    kills: 298,
    survivalTime: 8210,
    winRate: 72,
    rankTier: "钻石"
  },
  {
    rank: 4,
    playerId: "p004",
    playerName: "暴风",
    teamName: "雷霆战队",
    avatar: "⚡",
    kills: 276,
    survivalTime: 7890,
    winRate: 68,
    rankTier: "钻石"
  },
  {
    rank: 5,
    playerId: "p005",
    playerName: "钢铁",
    teamName: "重装甲团",
    avatar: "🛡️",
    kills: 254,
    survivalTime: 9120,
    winRate: 65,
    rankTier: "铂金"
  },
  {
    rank: 6,
    playerId: "p006",
    playerName: "暗夜",
    teamName: "幽灵战队",
    avatar: "🌙",
    kills: 241,
    survivalTime: 7560,
    winRate: 63,
    rankTier: "铂金"
  },
  {
    rank: 7,
    playerId: "p007",
    playerName: "利刃",
    teamName: "战狼突击队",
    avatar: "🗡️",
    kills: 228,
    survivalTime: 7230,
    winRate: 61,
    rankTier: "黄金"
  },
  {
    rank: 8,
    playerId: "p008",
    playerName: "闪电",
    teamName: "雷霆战队",
    avatar: "🌩️",
    kills: 215,
    survivalTime: 6890,
    winRate: 58,
    rankTier: "黄金"
  }
];

export const localPlayerSurvival: PlayerRankItem[] = [
  {
    rank: 1,
    playerId: "p005",
    playerName: "钢铁",
    teamName: "重装甲团",
    avatar: "🛡️",
    kills: 254,
    survivalTime: 9120,
    winRate: 65,
    rankTier: "铂金"
  },
  {
    rank: 2,
    playerId: "p001",
    playerName: "影子刺客",
    teamName: "幽灵战队",
    avatar: "🦅",
    kills: 328,
    survivalTime: 8940,
    winRate: 78,
    rankTier: "战神"
  },
  {
    rank: 3,
    playerId: "p002",
    playerName: "猎鹰",
    teamName: "战狼突击队",
    avatar: "🐺",
    kills: 312,
    survivalTime: 8520,
    winRate: 75,
    rankTier: "战神"
  },
  {
    rank: 4,
    playerId: "p003",
    playerName: "毒蛇",
    teamName: "蝰蛇小队",
    avatar: "🐍",
    kills: 298,
    survivalTime: 8210,
    winRate: 72,
    rankTier: "钻石"
  },
  {
    rank: 5,
    playerId: "p004",
    playerName: "暴风",
    teamName: "雷霆战队",
    avatar: "⚡",
    kills: 276,
    survivalTime: 7890,
    winRate: 68,
    rankTier: "钻石"
  },
  {
    rank: 6,
    playerId: "p009",
    playerName: "磐石",
    teamName: "重装甲团",
    avatar: "🪨",
    kills: 189,
    survivalTime: 7680,
    winRate: 55,
    rankTier: "黄金"
  },
  {
    rank: 7,
    playerId: "p006",
    playerName: "暗夜",
    teamName: "幽灵战队",
    avatar: "🌙",
    kills: 241,
    survivalTime: 7560,
    winRate: 63,
    rankTier: "铂金"
  },
  {
    rank: 8,
    playerId: "p010",
    playerName: "堡垒",
    teamName: "防守专家",
    avatar: "🏰",
    kills: 156,
    survivalTime: 7340,
    winRate: 52,
    rankTier: "黄金"
  }
];

export const localTeamKills: TeamRankItem[] = [
  {
    rank: 1,
    teamId: "t001",
    teamName: "幽灵战队",
    logo: "👻",
    totalKills: 1256,
    totalSurvivalTime: 35600,
    memberCount: 6,
    winRate: 82,
    rankTier: "王者战队"
  },
  {
    rank: 2,
    teamId: "t002",
    teamName: "战狼突击队",
    logo: "🐺",
    totalKills: 1189,
    totalSurvivalTime: 34200,
    memberCount: 8,
    winRate: 79,
    rankTier: "王者战队"
  },
  {
    rank: 3,
    teamId: "t003",
    teamName: "雷霆战队",
    logo: "⚡",
    totalKills: 1056,
    totalSurvivalTime: 31800,
    memberCount: 7,
    winRate: 74,
    rankTier: "钻石战队"
  },
  {
    rank: 4,
    teamId: "t004",
    teamName: "蝰蛇小队",
    logo: "🐍",
    totalKills: 978,
    totalSurvivalTime: 29500,
    memberCount: 5,
    winRate: 71,
    rankTier: "钻石战队"
  },
  {
    rank: 5,
    teamId: "t005",
    teamName: "重装甲团",
    logo: "🛡️",
    totalKills: 892,
    totalSurvivalTime: 36800,
    memberCount: 6,
    winRate: 68,
    rankTier: "铂金战队"
  },
  {
    rank: 6,
    teamId: "t006",
    teamName: "防守专家",
    logo: "🏰",
    totalKills: 756,
    totalSurvivalTime: 32100,
    memberCount: 5,
    winRate: 65,
    rankTier: "铂金战队"
  }
];

export const localTeamSurvival: TeamRankItem[] = [
  {
    rank: 1,
    teamId: "t005",
    teamName: "重装甲团",
    logo: "🛡️",
    totalKills: 892,
    totalSurvivalTime: 36800,
    memberCount: 6,
    winRate: 68,
    rankTier: "铂金战队"
  },
  {
    rank: 2,
    teamId: "t001",
    teamName: "幽灵战队",
    logo: "👻",
    totalKills: 1256,
    totalSurvivalTime: 35600,
    memberCount: 6,
    winRate: 82,
    rankTier: "王者战队"
  },
  {
    rank: 3,
    teamId: "t002",
    teamName: "战狼突击队",
    logo: "🐺",
    totalKills: 1189,
    totalSurvivalTime: 34200,
    memberCount: 8,
    winRate: 79,
    rankTier: "王者战队"
  },
  {
    rank: 4,
    teamId: "t006",
    teamName: "防守专家",
    logo: "🏰",
    totalKills: 756,
    totalSurvivalTime: 32100,
    memberCount: 5,
    winRate: 65,
    rankTier: "铂金战队"
  },
  {
    rank: 5,
    teamId: "t003",
    teamName: "雷霆战队",
    logo: "⚡",
    totalKills: 1056,
    totalSurvivalTime: 31800,
    memberCount: 7,
    winRate: 74,
    rankTier: "钻石战队"
  },
  {
    rank: 6,
    teamId: "t004",
    teamName: "蝰蛇小队",
    logo: "🐍",
    totalKills: 978,
    totalSurvivalTime: 29500,
    memberCount: 5,
    winRate: 71,
    rankTier: "钻石战队"
  }
];

export const localFeatures: FeatureItem[] = [
  {
    "id": 1,
    "title": "场地与场次管理",
    "description": "配置野战场地信息（丛林/废墟/城市巷战），设置每日开放场次（上午场/下午场/夜场），每场限制人数上限，支持特殊天气闭场。",
    "status": "已上线",
    "metric": "88%"
  },
  {
    "id": 2,
    "title": "战队组建与约战",
    "description": "玩家创建或加入战队，战队队长可发起约战挑战，选择对手战队、场地和场次，对方确认后生成对战订单。",
    "status": "排期中",
    "metric": "31 单"
  },
  {
    "id": 3,
    "title": "装备租赁管理",
    "description": "管理可租赁装备（仿真枪/护甲/护目镜/迷彩服），记录装备状态（完好/维修中/报废），玩家预约时可选择租赁装备套餐。",
    "status": "巡检中",
    "metric": "10 项"
  },
  {
    "id": 4,
    "title": "战绩统计与赛季排行榜",
    "description": "记录每局对战的击杀数、死亡数、生存时长、胜率等数据，生成个人和战队赛季排行榜，颁发段位勋章。",
    "status": "优化中",
    "metric": "4 级"
  },
  {
    "id": 5,
    "title": "套餐组合（团建/亲子）",
    "description": "预设多种套餐（团建套餐含教练/裁判/摄影，亲子套餐降低对抗强度），企业客户可预约团建包场，一次性安排多场次。",
    "status": "可导出",
    "metric": "28 条"
  }
];

export const localKpis: KpiItem[] = [
  {
    "label": "今日处理",
    "value": "110",
    "trend": "+12%",
    "tone": "primary"
  },
  {
    "label": "预约/订单",
    "value": "49",
    "trend": "+8%",
    "tone": "warm"
  },
  {
    "label": "履约率",
    "value": "89%",
    "trend": "+3%",
    "tone": "cool"
  },
  {
    "label": "待处理",
    "value": "6",
    "trend": "需跟进",
    "tone": "neutral"
  }
];

export const operationRecords: OperationRecord[] = [
  {
    "key": "ldairsoftcs-1",
    "name": "场地与场次管理",
    "owner": "运营组",
    "status": "已上线",
    "metric": "88%",
    "priority": "高"
  },
  {
    "key": "ldairsoftcs-2",
    "name": "战队组建与约战",
    "owner": "管理员",
    "status": "排期中",
    "metric": "31 单",
    "priority": "中"
  },
  {
    "key": "ldairsoftcs-3",
    "name": "装备租赁管理",
    "owner": "服务台",
    "status": "巡检中",
    "metric": "10 项",
    "priority": "低"
  },
  {
    "key": "ldairsoftcs-4",
    "name": "战绩统计与赛季排行榜",
    "owner": "财务组",
    "status": "优化中",
    "metric": "4 级",
    "priority": "高"
  },
  {
    "key": "ldairsoftcs-5",
    "name": "套餐组合（团建/亲子）",
    "owner": "审核组",
    "status": "可导出",
    "metric": "28 条",
    "priority": "中"
  }
];
