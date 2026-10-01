import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { CampaignStatus } from "@/features/phishguard/types";

export function StatusBadge({ status }: { status: CampaignStatus | string }) {
  const styles = status === "RUNNING" ? "border-info/20 bg-info/10 text-info" : status === "DONE" || status === "Approved" || status === "Reported" ? "border-success/20 bg-success/10 text-success" : status === "GENERATING" || status === "Review" ? "border-warning/20 bg-warning/10 text-warning" : status === "READY" ? "border-primary/20 bg-primary/10 text-primary" : status === "Submitted" ? "border-destructive/20 bg-destructive/10 text-destructive" : "border-border bg-muted text-muted-foreground";
  return <Badge variant="outline" className={cn("whitespace-nowrap font-medium", styles)}>{status.toLowerCase().replace(/^./, (c) => c.toUpperCase())}</Badge>;
}

export function RiskBar({ score }: { score: number }) {
  const tone = score >= 65 ? "bg-destructive" : score >= 45 ? "bg-warning" : "bg-success";
  return <div className="flex items-center gap-3"><div className="h-1.5 flex-1 overflow-hidden rounded-full bg-muted"><div className={cn("h-full rounded-full", tone)} style={{ width: `${score}%` }} /></div><span className="w-7 text-right text-xs font-semibold">{score}</span></div>;
}