# PhishGuard frontend implementation plan

## Product direction
Build a complete frontend-only enterprise security-awareness product with a restrained operations-console aesthetic: crisp light surfaces, charcoal navigation, teal security accents, amber risk states, compact data density, and clear typography. Use subtle state transitions and purposeful progress animation rather than decorative effects.

## Application foundation
- Replace the placeholder with a responsive protected application shell: collapsible desktop sidebar, mobile drawer, top bar, breadcrumbs, notifications, role switcher, and account menu.
- Add mock authentication screens and flows for sign in, sign up, and password recovery, including loading, success, validation, and error states.
- Model `ADMIN`, `MANAGER`, `VIEWER`, and `TARGET` permissions in the frontend so restricted navigation and actions change with the selected role.
- Create shared domain types, realistic fixtures, query keys, and asynchronous mock service modules so future backend calls can replace mocks without changing page components.

## Product routes and workflows
- **Dashboard:** campaign and behavior metrics, overall risk, trend chart, campaign activity, department risk, recent campaigns, and AI insight summaries.
- **Campaigns:** searchable/filterable/sortable responsive table, status tabs, progress and performance summaries, row actions, loading and empty states.
- **Campaign detail:** overview, audience, generated template, evaluation, generation timeline, behavioral results, department breakdown, AI insights, and activity history.
- **Create campaign:** validated five-step wizard for basics, audience, strategy, review, and mock generation; retain entered state across steps.
- **AI generation:** animated pipeline for planning, retrieval, generation, evaluation, personalization, and completion; expose pass/fail outcomes, the 0.75 threshold, retry, and completion actions.
- **Template review/library:** realistic email-client preview, editable safe training content, metadata, evaluation feedback, audit context, approval/regeneration actions, and template browsing/filtering.
- **Targets:** group overview, group detail, employee search/filter/table, selection controls, and add/manage group dialogs using mock state.
- **Analytics:** filters, KPI summaries, historical trends, department risk heatmap, campaign comparison, and behavior breakdown for opens, clicks, submissions, and reports.
- **AI insights:** progressive mock report streaming, completed/error/retry states, report sections, risk visualization, findings, and remediation actions.
- **Settings:** profile, account, security, notification preferences, and organization forms with mock save feedback.

## Shared experience quality
- Build reusable page headers, metric tiles, status/risk badges, data tables, filters, charts, dialogs, confirmations, empty/error/loading states, and responsive mobile list alternatives.
- Use TanStack Query for mock asynchronous reads and mutations, with success/error toasts and cache updates.
- Ensure keyboard focus, semantic labels, readable contrast, reduced-motion support, and layouts that remain usable across desktop, tablet, and mobile.
- Give every route unique page metadata and remove all template branding and placeholder content.

## Technical details
- This repository uses **TanStack Start with file-based routing**, rather than Next.js. The requested UX and architecture will be implemented with the project’s supported router while retaining React 19, TypeScript, Tailwind CSS, and TanStack Query.
- Keep all functionality browser-side with mock service adapters and mock stream subscriptions. No database, authentication service, backend route, SSE server, or external API will be added.
- Use the existing shadcn/Radix components, Lucide icons, Recharts, React Hook Form, and Zod already available in the project.
- Organize source by domain (`auth`, `campaigns`, `targets`, `templates`, `analytics`, `insights`, `settings`) plus shared shell, components, types, data, and services.

## Validation
- Verify every navigation destination and major action in the running preview.
- Exercise sign-in, role switching, campaign filtering, wizard progression, generation failure/retry/success, template review, insight streaming, dialogs, and settings save behavior.
- Check representative desktop and mobile viewports for overflow, table alternatives, chart sizing, and interaction accessibility.
