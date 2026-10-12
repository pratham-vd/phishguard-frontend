import { Link, useRouterState } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { Activity, BarChart3, Bell, Bot, ChevronDown, FileText, LayoutDashboard, Menu, Plus, Search, Settings, ShieldCheck, Target, Users, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import type { UserRole } from "@/features/phishguard/types";
import { cn } from "@/lib/utils";

type NavItem = { label: string; to: "/" | "/campaigns" | "/campaigns/create" | "/targets" | "/templates" | "/analytics" | "/insights" | "/settings"; icon: typeof Target; manage?: boolean };

const nav: NavItem[] = [
  { label: "Overview", to: "/", icon: LayoutDashboard },
  { label: "Campaigns", to: "/campaigns", icon: Activity },
  { label: "Create campaign", to: "/campaigns/create", icon: Plus, manage: true },
  { label: "Targets", to: "/targets", icon: Users },
  { label: "Templates", to: "/templates", icon: FileText },
  { label: "Analytics", to: "/analytics", icon: BarChart3 },
  { label: "AI insights", to: "/insights", icon: Bot },
  { label: "Settings", to: "/settings", icon: Settings },
];

const titles: Record<string, string> = { "/": "Security overview", "/campaigns": "Campaigns", "/campaigns/create": "Create campaign", "/targets": "Target management", "/templates": "Template library", "/analytics": "Analytics", "/insights": "AI insights", "/settings": "Settings" };

export function AppShell({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const [mobileOpen, setMobileOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [role, setRole] = useState<UserRole>("ADMIN");
  const title = pathname.startsWith("/campaigns/") && pathname !== "/campaigns/create" ? "Campaign detail" : titles[pathname] ?? "PhishGuard";
  const canManage = role === "ADMIN" || role === "MANAGER";

  const sidebar = (
    <aside className={cn("flex h-full flex-col border-r border-sidebar-border bg-sidebar text-sidebar-foreground transition-[width] duration-200", collapsed ? "w-[72px] lg:w-[72px]" : "w-[min(84vw,20rem)] lg:w-64")}>
      <div className="flex h-16 shrink-0 items-center gap-3 border-b border-sidebar-border px-4">
        <div className="grid size-9 shrink-0 place-items-center rounded-md bg-sidebar-primary text-sidebar-primary-foreground"><ShieldCheck className="size-5" /></div>
        {!collapsed && <div className="min-w-0 flex-1"><div className="font-display text-lg font-semibold leading-tight">PhishGuard</div><div className="mt-1 text-xs text-sidebar-foreground/55">AI Simulation Platform</div></div>}
        {mobileOpen && <Button aria-label="Close navigation" variant="ghost" size="icon" className="shrink-0 text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground" onClick={() => setMobileOpen(false)}><X className="size-5" /></Button>}
      </div>
      <nav className="flex-1 space-y-1 overflow-y-auto p-3" aria-label="Main navigation">
        {!collapsed && <p className="px-3 pb-2 pt-2 text-[10px] font-semibold uppercase text-sidebar-foreground/45">Workspace</p>}
        {nav.filter((item) => !item.manage || canManage).map((item) => {
          const active = item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
          return <TooltipProvider key={item.to}><Tooltip><TooltipTrigger asChild><Link to={item.to} onClick={() => setMobileOpen(false)} className={cn("relative flex h-10 items-center gap-3 rounded-md px-3 text-sm font-medium text-sidebar-foreground/68 transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground", active && "bg-sidebar-accent text-sidebar-accent-foreground before:absolute before:bottom-2 before:left-0 before:top-2 before:w-0.5 before:rounded-full before:bg-sidebar-primary")}><item.icon className={cn("size-[18px] shrink-0", active && "text-sidebar-primary")} />{!collapsed && <span>{item.label}</span>}</Link></TooltipTrigger>{collapsed && <TooltipContent side="right">{item.label}</TooltipContent>}</Tooltip></TooltipProvider>;
        })}
      </nav>
      <div className="shrink-0 border-t border-sidebar-border p-3">
        <div className={cn("flex items-center gap-3 rounded-md bg-sidebar-accent/60 p-2.5", collapsed && "justify-center")}><div className="grid size-9 shrink-0 place-items-center rounded-md bg-sidebar-primary text-sm font-bold text-sidebar-primary-foreground">NS</div>{!collapsed && <div className="min-w-0"><p className="truncate text-sm font-medium">Northstar Systems</p><p className="mt-0.5 text-xs text-sidebar-foreground/50">Enterprise workspace</p></div>}</div>
      </div>
    </aside>
  );

  return <div className="flex min-h-screen bg-background text-foreground">
    <div className="fixed inset-y-0 left-0 z-50 hidden lg:block">{sidebar}</div>
    {mobileOpen && <div className="fixed inset-0 z-50 lg:hidden"><button aria-label="Close navigation" className="absolute inset-0 bg-overlay backdrop-blur-[2px]" onClick={() => setMobileOpen(false)} /><div role="dialog" aria-modal="true" aria-label="Main navigation" className="relative ml-3 my-3 h-[calc(100dvh-1.5rem)] w-[min(84vw,20rem)] overflow-hidden rounded-2xl border border-sidebar-border shadow-2xl">{sidebar}</div></div>}
    <div className={cn("min-w-0 flex-1 transition-[margin] duration-200", collapsed ? "lg:ml-[72px]" : "lg:ml-64")}>
      <header className="sticky top-0 z-40 flex h-16 items-center justify-between border-b bg-background/95 px-4 backdrop-blur md:px-6">
        <div className="flex items-center gap-3"><Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setMobileOpen(true)} aria-label="Open navigation"><Menu /></Button><Button variant="ghost" size="icon" className="hidden lg:inline-flex" onClick={() => setCollapsed((value) => !value)} aria-label="Toggle navigation"><Menu /></Button><div><p className="text-[11px] text-muted-foreground">Northstar Systems / Workspace</p><h1 className="font-display text-base font-semibold">{title}</h1></div></div>
        <div className="flex items-center gap-1.5"><div className="hidden w-56 lg:block"><div className="relative"><Search className="absolute left-2.5 top-2.5 size-4 text-muted-foreground" /><Input className="pl-8" placeholder="Search workspace" aria-label="Search workspace" /></div></div><Button variant="ghost" size="icon" aria-label="Notifications" className="relative"><Bell /><span className="absolute right-2 top-2 size-1.5 rounded-full bg-destructive" /></Button><DropdownMenu><DropdownMenuTrigger asChild><Button variant="ghost" className="h-10 gap-2 px-2"><span className="grid size-7 place-items-center rounded-md bg-secondary text-xs font-semibold">MC</span><span className="hidden text-left md:block"><span className="block text-xs font-medium">Maya Chen</span><span className="block text-[10px] text-muted-foreground">{role}</span></span><ChevronDown className="size-3.5" /></Button></DropdownMenuTrigger><DropdownMenuContent align="end" className="w-52"><DropdownMenuLabel>Preview as role</DropdownMenuLabel><DropdownMenuSeparator />{(["ADMIN", "MANAGER", "VIEWER", "TARGET"] as UserRole[]).map((value) => <DropdownMenuItem key={value} onClick={() => setRole(value)}>{value}{role === value && <span className="ml-auto text-primary">Active</span>}</DropdownMenuItem>)}<DropdownMenuSeparator /><DropdownMenuItem asChild><Link to="/login">Sign out</Link></DropdownMenuItem></DropdownMenuContent></DropdownMenu></div>
      </header>
      <main className="mx-auto w-full max-w-[1600px] p-4 md:p-6 lg:p-8">{children}</main>
    </div>
  </div>;
}

export function PageHeader({ eyebrow, title, description, actions }: { eyebrow?: string; title: string; description: string; actions?: ReactNode }) {
  return <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-end"><div>{eyebrow && <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-primary">{eyebrow}</p>}<h2 className="font-display text-2xl font-semibold md:text-3xl">{title}</h2><p className="mt-1 max-w-2xl text-sm text-muted-foreground">{description}</p></div>{actions && <div className="flex shrink-0 flex-wrap gap-2">{actions}</div>}</div>;
}

export function MetricCard({ label, value, detail, icon: Icon, tone = "default" }: { label: string; value: string; detail: string; icon: typeof Target; tone?: "default" | "risk" | "good" }) {
  return <div className="rounded-lg border bg-card p-4 shadow-sm"><div className="flex items-start justify-between"><div><p className="text-xs font-medium text-muted-foreground">{label}</p><p className="mt-2 font-display text-2xl font-semibold">{value}</p></div><div className={cn("grid size-9 place-items-center rounded-md bg-secondary text-muted-foreground", tone === "risk" && "bg-risk/12 text-risk", tone === "good" && "bg-success/12 text-success")}><Icon className="size-4" /></div></div><p className="mt-2 text-xs text-muted-foreground">{detail}</p></div>;
}