import { campaigns, employees, report, targetGroups, templates } from "./mock-data";

const wait = (ms = 350) => new Promise((resolve) => setTimeout(resolve, ms));

export const mockApi = {
  async getCampaigns() { await wait(); return campaigns; },
  async getCampaign(id: string) { await wait(180); return campaigns.find((item) => item.id === id) ?? campaigns[0]; },
  async getTargets() { await wait(); return { groups: targetGroups, employees }; },
  async getTemplates() { await wait(); return templates; },
  async getInsight() { await wait(250); return report; },
  async save<T>(payload: T) { await wait(600); return payload; },
};

export const queryKeys = {
  campaigns: ["campaigns"] as const,
  campaign: (id: string) => ["campaign", id] as const,
  targets: ["targets"] as const,
  templates: ["templates"] as const,
  insight: ["insight"] as const,
};