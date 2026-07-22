# Contributing to Curated UI

First off, thanks for taking the time to contribute! 🎉

The following is a set of guidelines for contributing to Curated UI.

## Adding a New Site

Curated UI is designed to be easily extensible. If you found a great UI library, design system, or web tool that you think belongs here, we'd love to add it!

### How to Submit

**Option 1: Open an Issue (Easiest)**

1. Go to the [Issues](../../issues) tab.
2. Click **New Issue** and select the **Site Submission** template.
3. Fill out the details (Name, URL, Category, Description). We will review it and add it to the directory.

**Option 2: Open a Pull Request (For Developers)**

1. Fork the repository.
2. Open `src/data/sites.js`.
3. Add your new site to the `sites` array. Make sure you include a unique `imageSlug`:
   ```javascript
   {
     name: "Example UI",
     url: "https://exampleui.com",
     category: "Select the category that best describes what this site offers.",
     description: "A brief description of what this site offers.",
     imageSlug: "example-ui",
   }
   ```
4. Run the automated image fetcher script in your terminal to capture the screenshot:
   ```bash
   bun run fetch-images
   ```
   _(This script uses Puppeteer to automatically visit the site and take a high-quality screenshot, saving it directly to `/public/images/sites/`)_
5. Commit your changes (including the new image in `public/images/sites/`) and push to your fork.
6. Open a Pull Request!

## Local Development

If you are contributing code changes to the site itself:

1. Clone the repo and run `bun install`.
2. Run `bun run fetch-images` to ensure you have all the local screenshots.
3. Start the dev server with `bun dev`.

We use **Tailwind CSS v4** and **shadcn/ui** for styling and components. Please ensure your contributions match the existing design language and accessibility standards.
