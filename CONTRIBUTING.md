# Contributing to Curated UI

Thanks for helping improve Curated UI.

Contributions are welcome for new UI resources, AI agent skills, bug fixes, and improvements to the codebase.

## Adding a UI Resource

Curated UI collects useful resources including UI libraries, design systems, component collections, icon sets, animation tools, and other frontend resources.

Before submitting a resource, make sure it:

- Is publicly available
- Provides value to developers or designers
- Fits an existing category
- Does not duplicate an existing entry

### Submit Through an Issue

For simple submissions, open a GitHub issue with:

- **Name** — Resource name
- **URL** — Direct link to the resource
- **Category** — UI Components, Design Systems, Animation, Typography, Icons, etc.
- **Description** — A short explanation of what makes it useful

### Submit Through a Pull Request

1. Fork the repository.
2. Create a new branch.
3. Add the resource to:

```text
src/data/sites.js
```

Example:

```javascript
{
  name: "Resource Name",
  url: "https://example.com",
  category: "UI Components",
  description: "A brief description of the resource.",
  imageSlug: "resource-name",
}
```

1. Generate the screenshot:

```bash
bun run fetch-images
```

5. Commit the generated image:

```text
public/images/resource-name.jpg
```

6. Open a pull request.

## Adding an AI Agent Skill

AI agent skills should provide useful workflows, guidelines, or conventions for AI-assisted development.

Add new skills in:

```text
src/data/skills.js
```

Example:

```javascript
{
  name: "Skill Name",
  category: "Category",
  description: "Description of the workflow or guidelines.",
  source: "author/repository",
  url: "https://skills.sh/author/repository",
  copyCommand: "npx skills add author/repository",
}
```

Commit your changes and open a pull request.

## Code Contributions

Bug fixes, features, performance improvements, and UI changes are welcome.

### Setup

Clone your fork:

```bash
git clone https://github.com/your-username/curated-ui.git

cd curated-ui
```

Install dependencies:

```bash
bun install
```

Start the development server:

```bash
bun dev
```

## Development Guidelines

### Framework

- Use Next.js App Router patterns.
- Follow React 19 conventions.

### Styling

- Use Tailwind CSS v4 utilities where possible.
- Avoid unnecessary custom CSS.
- Keep components consistent with the existing design system.

### Components

- Reuse existing `shadcn/ui` components when possible.
- Extend existing components before introducing new patterns.

### Before Opening a Pull Request

Run:

```bash
bun run lint
```

Make sure:

- The project builds successfully.
- No lint errors remain.
- Changes follow existing project conventions.

## License

By contributing to Curated UI, you agree that your contributions will be licensed under the project's [MIT License](LICENSE).
