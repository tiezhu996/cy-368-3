import { API_BASE_URL } from "../constants/app";
import type { OverviewResponse, LeaderboardResponse } from "../types";

export async function fetchOverview(): Promise<OverviewResponse> {
  const response = await fetch(`${API_BASE_URL}/overview`, {
    headers: { Accept: "application/json" },
  });

  if (!response.ok) {
    throw new Error(`Overview request failed: ${response.status}`);
  }

  return response.json() as Promise<OverviewResponse>;
}

export async function fetchLeaderboard(): Promise<LeaderboardResponse> {
  const response = await fetch(`${API_BASE_URL}/leaderboard`, {
    headers: { Accept: "application/json" },
  });

  if (!response.ok) {
    throw new Error(`Leaderboard request failed: ${response.status}`);
  }

  return response.json() as Promise<LeaderboardResponse>;
}
