<script setup lang="ts">
import { ref, computed } from "vue";
import type { PlayerRankItem, TeamRankItem } from "../types";

const props = defineProps<{
  seasonName: string;
  seasonPeriod: string;
  playerKills: PlayerRankItem[];
  playerSurvival: PlayerRankItem[];
  teamKills: TeamRankItem[];
  teamSurvival: TeamRankItem[];
}>();

type CategoryType = "player" | "team";
type MetricType = "kills" | "survival";

const activeCategory = ref<CategoryType>("player");
const activeMetric = ref<MetricType>("kills");

function formatTime(seconds: number): string {
  const hours = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;
  return `${hours}h ${mins}m ${secs}s`;
}

function formatKills(kills: number): string {
  return kills.toLocaleString();
}

function getMedal(rank: number): string {
  if (rank === 1) return "🥇";
  if (rank === 2) return "🥈";
  if (rank === 3) return "🥉";
  return "";
}

function getRankClass(rank: number): string {
  if (rank === 1) return "rank-gold";
  if (rank === 2) return "rank-silver";
  if (rank === 3) return "rank-bronze";
  return "";
}

const playerData = computed(() => {
  return activeMetric.value === "kills" ? props.playerKills : props.playerSurvival;
});

const teamData = computed(() => {
  return activeMetric.value === "kills" ? props.teamKills : props.teamSurvival;
});

const currentPlayerPodium = computed(() => playerData.value.slice(0, 3));
const currentTeamPodium = computed(() => teamData.value.slice(0, 3));
const currentPlayerList = computed(() => playerData.value.slice(3));
const currentTeamList = computed(() => teamData.value.slice(3));
</script>

<template>
  <section class="leaderboard-panel work-panel">
    <div class="leaderboard-header">
      <div>
        <span class="pill">{{ seasonPeriod }}</span>
        <h2>{{ seasonName }} · 赛季排行榜</h2>
      </div>
      <div class="leaderboard-tabs">
        <div class="tab-group">
          <button
            :class="['tab-btn', { active: activeCategory === 'player' }]"
            @click="activeCategory = 'player'"
          >
            个人排行
          </button>
          <button
            :class="['tab-btn', { active: activeCategory === 'team' }]"
            @click="activeCategory = 'team'"
          >
            战队排行
          </button>
        </div>
        <div class="tab-group">
          <button
            :class="['tab-btn', { active: activeMetric === 'kills' }]"
            @click="activeMetric = 'kills'"
          >
            击杀数
          </button>
          <button
            :class="['tab-btn', { active: activeMetric === 'survival' }]"
            @click="activeMetric = 'survival'"
          >
            生存时长
          </button>
        </div>
      </div>
    </div>

    <div v-if="activeCategory === 'player'" class="leaderboard-content">
      <div class="podium-section">
        <div
          v-for="item in currentPlayerPodium"
          :key="item.playerId"
          :class="['podium-card', getRankClass(item.rank)]"
        >
          <div class="medal-badge">{{ getMedal(item.rank) }}</div>
          <div class="podium-avatar">{{ item.avatar }}</div>
          <div class="podium-info">
            <div class="podium-name">{{ item.playerName }}</div>
            <div class="podium-team">{{ item.teamName }}</div>
            <div class="podium-tier">{{ item.rankTier }}</div>
          </div>
          <div class="podium-metric">
            <span class="metric-label">
              {{ activeMetric === "kills" ? "击杀" : "生存时长" }}
            </span>
            <span class="metric-value">
              {{ activeMetric === "kills" ? formatKills(item.kills) : formatTime(item.survivalTime) }}
            </span>
          </div>
          <div class="podium-secondary">
            <span>胜率 {{ item.winRate }}%</span>
          </div>
        </div>
      </div>

      <div class="rank-table">
        <div class="rank-table-head">
          <div class="rank-col rank-num">#</div>
          <div class="rank-col rank-player">玩家</div>
          <div class="rank-col rank-team">战队</div>
          <div class="rank-col rank-tier">段位</div>
          <div class="rank-col rank-kills">击杀</div>
          <div class="rank-col rank-time">生存时长</div>
          <div class="rank-col rank-rate">胜率</div>
        </div>
        <div
          v-for="item in currentPlayerList"
          :key="item.playerId"
          class="rank-table-row"
        >
          <div class="rank-col rank-num">
            <span :class="['rank-badge', getRankClass(item.rank)]">{{ item.rank }}</span>
          </div>
          <div class="rank-col rank-player">
            <span class="player-avatar">{{ item.avatar }}</span>
            <span>{{ item.playerName }}</span>
          </div>
          <div class="rank-col rank-team">{{ item.teamName }}</div>
          <div class="rank-col rank-tier">
            <span class="tier-badge">{{ item.rankTier }}</span>
          </div>
          <div class="rank-col rank-kills">{{ formatKills(item.kills) }}</div>
          <div class="rank-col rank-time">{{ formatTime(item.survivalTime) }}</div>
          <div class="rank-col rank-rate">{{ item.winRate }}%</div>
        </div>
      </div>
    </div>

    <div v-else class="leaderboard-content">
      <div class="podium-section">
        <div
          v-for="item in currentTeamPodium"
          :key="item.teamId"
          :class="['podium-card', getRankClass(item.rank)]"
        >
          <div class="medal-badge">{{ getMedal(item.rank) }}</div>
          <div class="podium-avatar">{{ item.logo }}</div>
          <div class="podium-info">
            <div class="podium-name">{{ item.teamName }}</div>
            <div class="podium-team">{{ item.memberCount }} 名队员</div>
            <div class="podium-tier">{{ item.rankTier }}</div>
          </div>
          <div class="podium-metric">
            <span class="metric-label">
              {{ activeMetric === "kills" ? "总击杀" : "总生存时长" }}
            </span>
            <span class="metric-value">
              {{ activeMetric === "kills" ? formatKills(item.totalKills) : formatTime(item.totalSurvivalTime) }}
            </span>
          </div>
          <div class="podium-secondary">
            <span>胜率 {{ item.winRate }}%</span>
          </div>
        </div>
      </div>

      <div class="rank-table">
        <div class="rank-table-head">
          <div class="rank-col rank-num">#</div>
          <div class="rank-col rank-team">战队</div>
          <div class="rank-col rank-tier">段位</div>
          <div class="rank-col rank-members">队员</div>
          <div class="rank-col rank-kills">总击杀</div>
          <div class="rank-col rank-time">总生存时长</div>
          <div class="rank-col rank-rate">胜率</div>
        </div>
        <div
          v-for="item in currentTeamList"
          :key="item.teamId"
          class="rank-table-row"
        >
          <div class="rank-col rank-num">
            <span :class="['rank-badge', getRankClass(item.rank)]">{{ item.rank }}</span>
          </div>
          <div class="rank-col rank-team">
            <span class="player-avatar">{{ item.logo }}</span>
            <span>{{ item.teamName }}</span>
          </div>
          <div class="rank-col rank-tier">
            <span class="tier-badge">{{ item.rankTier }}</span>
          </div>
          <div class="rank-col rank-members">{{ item.memberCount }} 人</div>
          <div class="rank-col rank-kills">{{ formatKills(item.totalKills) }}</div>
          <div class="rank-col rank-time">{{ formatTime(item.totalSurvivalTime) }}</div>
          <div class="rank-col rank-rate">{{ item.winRate }}%</div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.leaderboard-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;
  flex-wrap: wrap;
  margin-bottom: 24px;
}

.leaderboard-header h2 {
  margin: 8px 0 0;
}

.leaderboard-tabs {
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-end;
}

.tab-group {
  display: flex;
  gap: 8px;
  background: color-mix(in srgb, #1d2229 8%, transparent);
  padding: 4px;
  border-radius: 999px;
}

.tab-btn {
  border: none;
  background: transparent;
  padding: 8px 16px;
  border-radius: 999px;
  cursor: pointer;
  font-weight: 600;
  font-size: 14px;
  color: color-mix(in srgb, #1d2229 65%, transparent);
  transition: all 0.2s ease;
}

.tab-btn:hover {
  color: #1d2229;
}

.tab-btn.active {
  background: #1d2229;
  color: #f5f6f1;
  box-shadow: 0 4px 12px color-mix(in srgb, #1d2229 30%, transparent);
}

.leaderboard-content {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.podium-section {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
}

.podium-card {
  position: relative;
  border-radius: 12px;
  padding: 20px;
  background: color-mix(in srgb, #f5f6f1 90%, white 10%);
  border: 1px solid color-mix(in srgb, #1d2229 12%, transparent);
  transition: all 0.3s ease;
}

.podium-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 16px 40px color-mix(in srgb, #1d2229 18%, transparent);
}

.podium-card.rank-gold {
  background: linear-gradient(135deg, color-mix(in srgb, #ffd700 18%, #f5f6f1), #f5f6f1);
  border-color: color-mix(in srgb, #ffd700 50%, transparent);
}

.podium-card.rank-silver {
  background: linear-gradient(135deg, color-mix(in srgb, #c0c0c0 18%, #f5f6f1), #f5f6f1);
  border-color: color-mix(in srgb, #c0c0c0 50%, transparent);
}

.podium-card.rank-bronze {
  background: linear-gradient(135deg, color-mix(in srgb, #cd7f32 18%, #f5f6f1), #f5f6f1);
  border-color: color-mix(in srgb, #cd7f32 50%, transparent);
}

.medal-badge {
  position: absolute;
  top: -12px;
  right: 16px;
  font-size: 36px;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2));
}

.podium-avatar {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: color-mix(in srgb, #546a7b 15%, transparent);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  margin-bottom: 12px;
  border: 2px solid color-mix(in srgb, #1d2229 10%, transparent);
}

.podium-info {
  margin-bottom: 12px;
}

.podium-name {
  font-size: 18px;
  font-weight: 800;
  color: #1d2229;
}

.podium-team {
  font-size: 13px;
  color: color-mix(in srgb, #1d2229 60%, #546a7b);
  margin-top: 2px;
}

.podium-tier {
  display: inline-block;
  margin-top: 6px;
  padding: 3px 10px;
  border-radius: 999px;
  background: color-mix(in srgb, #b84a37 14%, transparent);
  color: #b84a37;
  font-size: 12px;
  font-weight: 700;
}

.podium-metric {
  padding: 12px 0;
  border-top: 1px dashed color-mix(in srgb, #1d2229 15%, transparent);
  border-bottom: 1px dashed color-mix(in srgb, #1d2229 15%, transparent);
}

.metric-label {
  display: block;
  font-size: 12px;
  color: color-mix(in srgb, #1d2229 55%, transparent);
  margin-bottom: 4px;
}

.metric-value {
  display: block;
  font-size: 24px;
  font-weight: 800;
  color: #1d2229;
}

.podium-secondary {
  padding-top: 10px;
  font-size: 13px;
  color: color-mix(in srgb, #1d2229 60%, #546a7b);
  font-weight: 600;
}

.rank-table {
  border: 1px solid color-mix(in srgb, #1d2229 12%, transparent);
  border-radius: 8px;
  overflow: hidden;
}

.rank-table-head {
  display: grid;
  grid-template-columns: 60px 1.5fr 1.2fr 1fr 0.9fr 1.1fr 0.8fr;
  gap: 12px;
  padding: 14px 16px;
  background: color-mix(in srgb, #546a7b 12%, transparent);
  font-weight: 800;
  font-size: 13px;
  color: #1d2229;
}

.rank-table-row {
  display: grid;
  grid-template-columns: 60px 1.5fr 1.2fr 1fr 0.9fr 1.1fr 0.8fr;
  gap: 12px;
  padding: 13px 16px;
  border-top: 1px solid color-mix(in srgb, #1d2229 10%, transparent);
  align-items: center;
  font-size: 14px;
  transition: background 0.2s ease;
}

.rank-table-row:hover {
  background: color-mix(in srgb, #546a7b 6%, transparent);
}

.rank-col {
  display: flex;
  align-items: center;
  gap: 8px;
}

.rank-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background: color-mix(in srgb, #546a7b 15%, transparent);
  font-weight: 800;
  font-size: 14px;
}

.rank-badge.rank-gold {
  background: linear-gradient(135deg, #ffd700, #ffb700);
  color: #5a4200;
  box-shadow: 0 2px 8px color-mix(in srgb, #ffd700 50%, transparent);
}

.rank-badge.rank-silver {
  background: linear-gradient(135deg, #e0e0e0, #a0a0a0);
  color: #2d2d2d;
  box-shadow: 0 2px 8px color-mix(in srgb, #c0c0c0 50%, transparent);
}

.rank-badge.rank-bronze {
  background: linear-gradient(135deg, #cd7f32, #a0522d);
  color: #fff;
  box-shadow: 0 2px 8px color-mix(in srgb, #cd7f32 50%, transparent);
}

.player-avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: color-mix(in srgb, #546a7b 15%, transparent);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
}

.tier-badge {
  padding: 3px 10px;
  border-radius: 999px;
  background: color-mix(in srgb, #546a7b 14%, transparent);
  font-size: 12px;
  font-weight: 700;
}

.rank-kills,
.rank-rate {
  font-weight: 700;
  color: #1d2229;
}

.rank-time {
  font-variant-numeric: tabular-nums;
}

@media (max-width: 960px) {
  .podium-section {
    grid-template-columns: 1fr;
  }

  .rank-table-head,
  .rank-table-row {
    grid-template-columns: 50px 1fr 80px 60px;
  }

  .rank-col.rank-team,
  .rank-col.rank-time {
    display: none;
  }

  .leaderboard-tabs {
    align-items: flex-start;
    width: 100%;
  }

  .tab-group {
    width: 100%;
  }

  .tab-btn {
    flex: 1;
  }
}

@media (max-width: 560px) {
  .rank-table-head,
  .rank-table-row {
    grid-template-columns: 40px 1fr 60px;
  }

  .rank-col.rank-tier,
  .rank-col.rank-members {
    display: none;
  }
}
</style>
