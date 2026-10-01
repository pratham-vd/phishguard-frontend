export type UserRole = "ADMIN" | "MANAGER" | "VIEWER" | "TARGET";
export type CampaignStatus = "DRAFT" | "GENERATING" | "READY" | "RUNNING" | "DONE";

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  organization: string;
}

export interface CampaignResult {
  targeted: number;
  opened: number;
  clicked: number;
  submitted: number;
  reported: number;
}

export interface Campaign {
  id: string;
  name: string;
  category: string;
  difficulty: "Low" | "Medium" | "High";
  targetGroup: string;
  status: CampaignStatus;
  createdAt: string;
  progress: number;
  evaluationScore: number;
  result: CampaignResult;
}

export interface TargetGroup {
  id: string;
  name: string;
  department: string;
  members: number;
  riskScore: number;
  lastCampaign: string;
}

export interface Employee {
  id: string;
  name: string;
  initials: string;
  department: string;
  title: string;
  email: string;
  group: string;
  status: "Reported" | "Clicked" | "Submitted" | "No action";
}

export interface EmailTemplate {
  id: string;
  name: string;
  category: string;
  difficulty: "Low" | "Medium" | "High";
  score: number;
  status: "Approved" | "Review" | "Draft";
  createdAt: string;
  senderName: string;
  senderEmail: string;
  subject: string;
  preview: string;
}

export interface InsightReport {
  id: string;
  title: string;
  createdAt: string;
  risk: "Low" | "Moderate" | "High";
  summary: string;
  findings: string[];
  recommendations: string[];
}