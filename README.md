# PhishGuard Frontend

Build a complete, polished, production-quality frontend for a SaaS product called "PhishGuard — AI Phishing Simulation Platform".

IMPORTANT:
This task is ONLY for the frontend.

Do NOT build the backend, database, authentication server, AI agents, LangGraph pipeline, RAG pipeline, Redis, PostgreSQL, FastAPI services, or real API integrations.

Use realistic mock data and mock service functions wherever backend data is required. Structure the frontend cleanly so a real FastAPI backend can be connected later without redesigning the UI.

TECH STACK:
- Next.js 14
- App Router
- TypeScript
- Tailwind CSS
- React Query / TanStack Query
- Axios-ready API service layer
- Reusable component architecture

PRODUCT PURPOSE:

PhishGuard is an enterprise cybersecurity awareness platform. Security teams use it to create realistic simulated phishing campaigns, generate and evaluate phishing email templates using AI, target specific employee groups, launch campaigns, track employee behavior, and receive AI-generated security insights.

The product should feel like a real modern enterprise cybersecurity SaaS product — NOT like a basic college project or generic admin dashboard.

DESIGN:

You have freedom to decide the visual design.

Choose the best visual language, color system, typography, spacing, navigation, cards, charts, icons, animations, and layout for a premium AI + cybersecurity SaaS product.

Prioritize:
- Excellent UX
- Strong visual hierarchy
- Professional enterprise appearance
- Clean and modern interface
- Intuitive navigation
- Consistent design system
- Responsive design
- Accessibility
- Subtle, purposeful animations
- Excellent empty/loading/error/success states
- High information density without making the UI cluttered

Do not copy another product's design.

The application should look polished enough to be presented as a real startup product.

CORE APPLICATION STRUCTURE:

Create a proper application shell with:
- Sidebar navigation
- Top navigation/header
- User profile/account menu
- Notifications area
- Responsive mobile navigation
- Breadcrumbs where useful
- Consistent page headers
- Reusable buttons, cards, tables, badges, modals, dialogs, tabs, dropdowns, forms and tooltips

MAIN NAVIGATION:

Include appropriate sections such as:

1. Dashboard
2. Campaigns
3. Create Campaign
4. Target Groups / Employees
5. Templates
6. Analytics
7. AI Insights
8. Profile / Settings

You may adjust the navigation structure if you determine a better UX.

AUTHENTICATION UI:

Create polished:
- Login page
- Signup page
- Forgot password UI
- Authentication loading states
- Authentication error states
- Protected application shell

Use mock authentication only.

Support the four roles defined by the product:
- ADMIN
- MANAGER
- VIEWER
- TARGET

The UI should be capable of showing/hiding functionality based on role, but actual authorization will be implemented by the backend later.

DASHBOARD:

Create a comprehensive security operations dashboard.

It should provide an immediate overview of the organization's phishing simulation activity.

Include appropriate widgets/cards for things such as:
- Total campaigns
- Active campaigns
- Employees targeted
- Open rate
- Click rate
- Submit rate
- Report rate
- Overall risk indicator
- Recent campaigns
- Campaign activity
- Department risk
- Recent AI insights

Use realistic mock data.

Include useful charts/visualizations where appropriate.

Do not overload the dashboard with unnecessary charts. Prioritize information that helps a security manager understand the current security-awareness situation quickly.

CAMPAIGNS:

Create a campaign management page.

Include:
- Campaign list/table
- Campaign name
- Category
- Difficulty
- Target group
- Status
- Created date
- Progress
- Performance summary
- Actions

Campaign statuses should support:

DRAFT
GENERATING
READY
RUNNING
DONE

Provide:
- Search
- Filtering
- Sorting
- Status filters
- Campaign detail view
- Campaign actions
- Empty state
- Loading state

CREATE CAMPAIGN WIZARD:

Create a polished multi-step campaign creation experience.

The wizard should allow the manager to configure:

Step 1 — Campaign basics
- Campaign name
- Description
- Category
- Difficulty

Step 2 — Target audience
- Select target group
- Department
- Employee/job-role targeting
- Target count

Step 3 — Campaign strategy
- Relevant campaign parameters
- Scenario/context
- Tone/persona where appropriate

Step 4 — Review
Show a clear summary of everything selected.

Step 5 — Generate
Start the simulated AI-generation process using mock frontend state.

The wizard should feel smooth and professional.

AI GENERATION EXPERIENCE:

This is one of the most important experiences in the product.

Create a visually compelling generation-progress interface.

Show the AI pipeline as a sequence of stages:

Campaign Planner
↓
Knowledge Retrieval
↓
Template Generator
↓
Realism Evaluator
↓
Personalisation
↓
Ready

Show the current active stage, completed stages, progress, status messages and appropriate animations.

Support mock outcomes such as:
- Generating
- Evaluation passed
- Evaluation failed
- Retry
- Generation completed

The Realism Evaluator should visually display an evaluation score.

Use the PRD's 0.75 evaluation threshold as the mock UI threshold.

If evaluation fails, show a clear retry state rather than silently changing the result.

EMAIL TEMPLATE REVIEW:

Create a high-quality email preview/review screen.

Show:
- Sender name
- Sender email
- Recipient
- Subject
- Email body
- Template metadata
- AI evaluation score
- Evaluation feedback
- Generation information
- Retrieved-context/audit information in an appropriate secondary section

The email should look like an actual email client preview.

Allow the manager to:
- Review
- Approve
- Regenerate
- Edit where appropriate
- Continue to campaign launch

Use safe simulated phishing content suitable for an awareness-training platform.

TARGET GROUPS / EMPLOYEES:

Create a target management interface.

Show employee information such as:
- Name
- Department
- Job title
- Email
- Group
- Campaign participation/status

Create:
- Target group list
- Group detail page
- Employee table
- Search
- Filters
- Add/manage group UI
- Selection UI for campaigns

Use mock employee data.

ANALYTICS:

Create a dedicated analytics dashboard.

Track the behavioral events defined by the product:
- Open
- Click
- Submit
- Report

Show meaningful analytics such as:
- Total targeted
- Open rate
- Click-through rate
- Submit rate
- Report rate
- Department performance
- Campaign performance
- Historical trends

Use appropriate charts and visualizations.

Create a department risk heatmap.

Create campaign comparison visualizations.

Allow useful filtering by:
- Campaign
- Department
- Date range
- Target group

AI INSIGHT REPORT:

Create a dedicated AI-generated insight experience.

The backend will eventually stream this report using SSE, so design the frontend to support progressive report generation.

Show a realistic mock streaming state where the report appears progressively.

The report should contain sections such as:
- Executive summary
- Overall risk
- Department risk
- Behavioral breakdown
- Key findings
- Campaign observations
- Recommended remediation actions

Make this feel like an AI security analyst is producing a professional report.

Include:
- Streaming/loading state
- Completed report state
- Error state
- Regeneration/retry state

Also provide appropriate visualizations alongside the report.

CAMPAIGN DETAIL PAGE:

Create a detailed campaign page containing:

- Campaign overview
- Current status
- Target audience
- Generated template
- Evaluation score
- Generation timeline
- Campaign performance
- Behavioral statistics
- Department breakdown
- AI insights
- Activity/history

This should act as the central page for a specific campaign.

TEMPLATES:

Create a template library page showing generated email templates.

Include:
- Template cards/table
- Category
- Difficulty
- Evaluation score
- Status
- Created date
- Preview action

Create a detailed template preview.

SETTINGS / PROFILE:

Create a professional settings area.

Include appropriate sections for:
- Profile
- Account
- Security
- Notification preferences
- Organization information

Keep the UI frontend-only with mock settings.

MOCK DATA:

Populate the application with realistic mock data so every important screen looks complete immediately after running the application.

Do not use lorem ipsum.

Create realistic:
- Campaign names
- Departments
- Employees
- Campaign statistics
- Evaluation scores
- AI insights
- Dates
- Statuses
- Email previews

COMPONENT ARCHITECTURE:

Create reusable components instead of duplicating UI.

Organize the frontend cleanly into:
- Layout components
- Navigation components
- Dashboard components
- Campaign components
- Analytics components
- AI insight components
- Form components
- Table components
- Chart components
- Modal/dialog components
- Loading/empty/error states
- Mock API/service layer

Create clean TypeScript types/interfaces for the main entities:
- User
- Campaign
- TargetGroup
- Employee
- EmailTemplate
- CampaignResult
- InsightReport

BACKEND INTEGRATION PREPARATION:

Create a clean abstraction for future API integration.

For example, organize mock API functions/services so they can later be replaced with Axios calls to FastAPI.

Do not hardcode backend implementation into UI components.

The future backend will provide:
- Authentication
- Campaign CRUD
- Template CRUD
- Target management
- Campaign generation
- Behavioral analytics
- AI insights
- SSE streaming

Design the frontend so these can be connected later with minimal changes.

REAL-TIME UI:

Prepare the frontend architecture for Server-Sent Events.

For now use a mock simulation for:
- Campaign generation progress
- Campaign status changes
- AI insight streaming

Do not implement a real SSE backend.

RESPONSIVENESS:

The entire application must work well on:
- Desktop
- Laptop
- Tablet
- Mobile

Pay particular attention to tables, charts, campaign wizard, email previews and analytics.

UX QUALITY:

Include:
- Skeleton loaders
- Empty states
- Error states
- Toast notifications
- Confirmation dialogs
- Form validation
- Hover states
- Focus states
- Disabled states
- Success states
- Smooth transitions

Avoid unnecessary animations or visual effects that hurt usability.

FINAL QUALITY BAR:

Treat this as a real enterprise SaaS product that will be demonstrated to mentors, developers and potential users.

Do NOT make it look like a generic CRUD dashboard.

Do NOT create unnecessary features outside the product requirements.

Do NOT build backend functionality.

Focus your effort on making the frontend visually impressive, coherent, intuitive, responsive, realistic and easy for another developer to connect to a FastAPI backend later.

Before finishing, make sure all major navigation routes work, all important buttons have sensible frontend behavior, mock data is populated, and there are no obviously unfinished screens or placeholder sections.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/27c96903-c88c-4e9f-86f2-5419430f1c5f).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
