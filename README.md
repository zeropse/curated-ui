# Curated UI

![Curated UI](./public/og-image.png)

A curated collection of modern UI resources for developers and designers.

Curated UI brings together UI libraries, design systems, animation tools, typography resources, and AI agent skills in one searchable directory. The goal is simple: make it easier to discover reliable tools and patterns when building web interfaces.

## Features

### UI Resources

A handpicked collection of:

- React and Tailwind component libraries
- Design systems
- Animation and interaction libraries
- Icon sets
- Color tools
- Typography resources

### AI Agent Skills

A directory of reusable instructions which i mainly use and workflows for AI coding assistants.

Each skill includes a ready-to-copy command:

```bash
npx skills add author/repository
```

Compatible with AI development tools such as Claude, Cursor, Windsurf, and other agent-based workflows.

### Search & Filtering

Resources can be searched and filtered by category or keyword.

Filtering state is persisted through URL parameters using `nuqs`, with animated transitions powered by `motion`.

### Automated Screenshots

Resource screenshots are generated automatically using Puppeteer.

Screenshots are stored locally to avoid relying on third-party image APIs at runtime.

## Tech Stack

| Area           | Technology                |
| -------------- | ------------------------- |
| Framework      | Next.js 16 (App Router)   |
| UI             | React 19                  |
| Styling        | Tailwind CSS v4           |
| Components     | shadcn/ui, @base-ui/react |
| Icons          | Tabler Icons React        |
| Animation      | Motion, tw-animate-css    |
| URL State      | nuqs                      |
| Virtualization | react-virtuoso            |
| Automation     | Puppeteer                 |
| Runtime        | Bun                       |

## Getting Started

### Requirements

- Node.js
- Bun

### Installation

Clone the repository:

```bash
git clone https://github.com/zeropse/curated-ui.git

cd curated-ui
```

Install dependencies:

```bash
bun install
```

## Development

Start the development server:

```bash
bun dev
```

Open:

```
http://localhost:3000
```

## Screenshot Generation

Curated UI stores resource screenshots locally.

To generate screenshots for resources added in `src/data/sites.js`:

```bash
bun run fetch-images
```

Generated images are saved to:

```
public/images/
```

This keeps the application independent from external screenshot services and runtime API limits.

## Project Structure

```
curated-ui/
├── scripts/
│   └── downloadImages.js     # Puppeteer screenshot generator
│
├── src/
│   ├── app/                  # Next.js routes
│   ├── components/           # Shared UI components
│   ├── data/
│   │   ├── sites.js          # UI resource data
│   │   └── skills.js         # AI agent skill data
│   ├── hooks/                # Custom React hooks
│   └── lib/                  # Utilities
│
└── public/
    └── images/               # Generated screenshots
```

---

## Adding Resources

### 1: Add a UI Resource

Edit:

```
src/data/sites.js
```

Add a new entry:

```javascript
{
  name: "Library Name",
  url: "https://example.com",
  category: "UI Components",
  description: "Short description of the resource.",
  imageSlug: "library-name"
}
```

Generate its screenshot:

```bash
bun run fetch-images
```

### 2: Add an AI Skill

Edit:

```
src/data/skills.js
```

Add a new entry:

```javascript
{
  name: "Skill Name",
  category: "Category",
  description: "Description of the workflow or guidelines.",
  source: "author/repository",
  url: "https://skills.sh/author/repository",
  copyCommand: "npx skills add author/repository"
}
```

## Scripts

| Command                | Description                   |
| ---------------------- | ----------------------------- |
| `bun dev`              | Start development server      |
| `bun run build`        | Create production build       |
| `bun run start`        | Run production server         |
| `bun run lint`         | Run ESLint                    |
| `bun run fetch-images` | Generate resource screenshots |

## License

MIT © [zeropse](https://github.com/zeropse)
