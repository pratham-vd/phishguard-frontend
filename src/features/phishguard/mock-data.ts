import type { Campaign, Employee, EmailTemplate, InsightReport, TargetGroup, User } from "./types";

export const currentUser: User = { id: "u-1", name: "Maya Chen", email: "maya.chen@northstar.io", role: "ADMIN", organization: "Northstar Systems" };

export const campaigns: Campaign[] = [
  { id: "q4-benefits", name: "Q4 Benefits Enrollment", category: "HR impersonation", difficulty: "High", targetGroup: "All employees", status: "RUNNING", createdAt: "Oct 1, 2026", progress: 68, evaluationScore: 0.91, result: { targeted: 842, opened: 489, clicked: 96, submitted: 21, reported: 173 } },
  { id: "cloud-password", name: "Cloud Password Expiry", category: "Credential alert", difficulty: "Medium", targetGroup: "Engineering & Product", status: "DONE", createdAt: "Sep 22, 2026", progress: 100, evaluationScore: 0.87, result: { targeted: 312, opened: 241, clicked: 58, submitted: 12, reported: 94 } },
  { id: "invoice-review", name: "Vendor Invoice Review", category: "Finance request", difficulty: "High", targetGroup: "Finance & Operations", status: "READY", createdAt: "Sep 29, 2026", progress: 100, evaluationScore: 0.94, result: { targeted: 128, opened: 0, clicked: 0, submitted: 0, reported: 0 } },
  { id: "security-update", name: "Urgent Security Update", category: "IT notification", difficulty: "Medium", targetGroup: "Remote workforce", status: "GENERATING", createdAt: "Oct 1, 2026", progress: 54, evaluationScore: 0.72, result: { targeted: 417, opened: 0, clicked: 0, submitted: 0, reported: 0 } },
  { id: "shared-document", name: "Shared Document Access", category: "Collaboration", difficulty: "Low", targetGroup: "Sales", status: "DRAFT", createdAt: "Sep 30, 2026", progress: 20, evaluationScore: 0, result: { targeted: 164, opened: 0, clicked: 0, submitted: 0, reported: 0 } },
  { id: "executive-message", name: "Executive Strategy Memo", category: "Executive impersonation", difficulty: "High", targetGroup: "Leadership", status: "DONE", createdAt: "Sep 10, 2026", progress: 100, evaluationScore: 0.96, result: { targeted: 76, opened: 69, clicked: 14, submitted: 3, reported: 31 } },
];

export const targetGroups: TargetGroup[] = [
  { id: "g1", name: "Finance & Operations", department: "Finance", members: 128, riskScore: 72, lastCampaign: "12 days ago" },
  { id: "g2", name: "Engineering & Product", department: "Engineering", members: 312, riskScore: 38, lastCampaign: "8 days ago" },
  { id: "g3", name: "Remote workforce", department: "Cross-functional", members: 417, riskScore: 55, lastCampaign: "21 days ago" },
  { id: "g4", name: "Executive leadership", department: "Leadership", members: 76, riskScore: 61, lastCampaign: "18 days ago" },
];

export const employees: Employee[] = [
  { id: "e1", name: "Alex Morgan", initials: "AM", department: "Finance", title: "Senior Financial Analyst", email: "alex.morgan@northstar.io", group: "Finance & Operations", status: "Clicked" },
  { id: "e2", name: "Jordan Lee", initials: "JL", department: "Engineering", title: "Platform Engineer", email: "jordan.lee@northstar.io", group: "Engineering & Product", status: "Reported" },
  { id: "e3", name: "Priya Shah", initials: "PS", department: "Sales", title: "Account Executive", email: "priya.shah@northstar.io", group: "Remote workforce", status: "No action" },
  { id: "e4", name: "Marcus Reed", initials: "MR", department: "Operations", title: "Procurement Manager", email: "marcus.reed@northstar.io", group: "Finance & Operations", status: "Submitted" },
  { id: "e5", name: "Sofia Alvarez", initials: "SA", department: "People", title: "People Partner", email: "sofia.alvarez@northstar.io", group: "Remote workforce", status: "Reported" },
  { id: "e6", name: "Noah Williams", initials: "NW", department: "Engineering", title: "Product Designer", email: "noah.williams@northstar.io", group: "Engineering & Product", status: "Clicked" },
];

export const templates: EmailTemplate[] = [
  { id: "t1", name: "Benefits portal update", category: "HR impersonation", difficulty: "High", score: 0.91, status: "Approved", createdAt: "Oct 1, 2026", senderName: "Northstar People Team", senderEmail: "benefits-notice@training.northstar.io", subject: "Action required: confirm your 2027 benefit elections", preview: "Your annual benefits review window closes this Friday. Please review your current selections in the training portal." },
  { id: "t2", name: "Cloud password alert", category: "Credential alert", difficulty: "Medium", score: 0.87, status: "Approved", createdAt: "Sep 22, 2026", senderName: "IT Service Desk", senderEmail: "service-desk@training.northstar.io", subject: "Your cloud password expires today", preview: "We detected that your managed cloud password is due to expire. Use the simulation link to review this training scenario." },
  { id: "t3", name: "Updated vendor invoice", category: "Finance request", difficulty: "High", score: 0.94, status: "Review", createdAt: "Sep 29, 2026", senderName: "Avery Consulting", senderEmail: "billing@training-vendor.example", subject: "Revised invoice 10482 — approval requested", preview: "Attached is the corrected invoice requested by your procurement team. Please review the payment details." },
  { id: "t4", name: "Shared Q4 roadmap", category: "Collaboration", difficulty: "Low", score: 0.79, status: "Draft", createdAt: "Sep 30, 2026", senderName: "Documents", senderEmail: "sharing@training.northstar.io", subject: "A document has been shared with you", preview: "A colleague shared the Q4 operating roadmap with you. This is a safe awareness simulation." },
];

export const report: InsightReport = {
  id: "r-1", title: "September security-awareness analysis", createdAt: "Oct 1, 2026 at 08:42", risk: "Moderate",
  summary: "Northstar's overall susceptibility decreased by 6.4% this month, driven by stronger reporting behavior in Engineering. Finance remains the highest-priority coaching opportunity.",
  findings: ["Finance click-through is 2.1× the organization average.", "Report rate improved from 17.8% to 23.4% across three campaigns.", "Urgency language remains the strongest trigger across all departments."],
  recommendations: ["Assign a 10-minute invoice fraud module to Finance and Operations.", "Repeat the executive-impersonation scenario for new managers within 30 days.", "Recognize teams reporting simulations within five minutes to reinforce behavior."],
};

export const trendData = [
  { month: "May", click: 19, report: 13 }, { month: "Jun", click: 17, report: 15 }, { month: "Jul", click: 16, report: 18 }, { month: "Aug", click: 14, report: 20 }, { month: "Sep", click: 12, report: 23 }, { month: "Oct", click: 11, report: 26 },
];

export const departmentRisk = [
  { name: "Finance", score: 72, change: 4 }, { name: "Leadership", score: 61, change: -3 }, { name: "Operations", score: 55, change: -6 }, { name: "Sales", score: 47, change: -8 }, { name: "People", score: 41, change: -5 }, { name: "Engineering", score: 38, change: -11 },
];