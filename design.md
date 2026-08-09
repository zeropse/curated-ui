# Design — Curated UI

A locked design system for Curated UI. Every page redesign reads this file before emitting code. Do not regenerate per page — extend or amend this file when the system needs to grow.

## Genre

`modern-minimal`

## Macrostructure Family

Pages within a family share the family's shape; they vary only in component archetypes.

- **Marketing pages (`/`)**: `Marquee Hero` base macrostructure + `Workbench` feature grid
- **App / Directory pages (`/browse`, `/skills`)**: `Workbench` macrostructure with sticky filter rail & high-density card grid
- **Content pages (`/faq`, `/privacy`, `/terms`, `/not-found`)**: `Long Document` macrostructure with editorial text measure and side index

## Theme & OKLCH Tokens

- `--color-paper`: `oklch(0.96 0.008 60)` (`#f3f0ee` / light canvas)
- `--color-paper-2`: `oklch(0.985 0.004 60)` (`#fcfbfa`)
- `--color-ink`: `oklch(0.18 0.008 60)` (`#141413` / primary text)
- `--color-ink-2`: `oklch(0.48 0.008 60)` (secondary muted text)
- `--color-rule`: `oklch(0.90 0.005 60)` (border & divider lines)
- `--color-accent`: `oklch(0.65 0.22 38.5)` (`#f95722` / Terracotta warm orange)
- `--color-accent-ink`: `oklch(0.98 0 0)`
- `--color-focus`: `oklch(0.65 0.22 38.5 / 0.5)`

### Dark Mode Tokens

- `--color-paper`: `oklch(0.18 0.008 60)` (`#141413`)
- `--color-paper-2`: `oklch(0.24 0.008 60)` (`#262627`)
- `--color-ink`: `oklch(0.96 0.008 60)` (`#f3f0ee`)
- `--color-ink-2`: `oklch(0.65 0.008 60)` (`#a1a1a1`)
- `--color-rule`: `oklch(0.28 0.008 60)`
- `--color-accent`: `oklch(0.68 0.22 38.5)` (`#ff6b3b`)

## Typography

- **Display**: `Inter Tight`, weight `600`/`700`, style `normal` (all headings upright — no italic headers)
- **Body**: `Inter`, weight `450`, style `normal`
- **Mono**: `Geist Mono` / System Monospace, weight `500`
- **Display tracking**: `-0.035em` for titles, `-0.02em` for headings
- **Type scale anchor**: `clamp(2.5rem, 6vw, 5.5rem)` for primary display headers

## Shadcn UI Component Standards

Every interactive UI primitive and surface across the application MUST use native `shadcn/ui` components from `@/components/ui/`:

- **Action Triggers & Nav Buttons**: `<Button>` (variants: `default`, `outline`, `ghost`, `secondary`)
- **Tags & Category Markers**: `<Badge>` (variants: `default`, `outline`, `secondary`)
- **Directory & Feature Containers**: `<Card>`, `<CardHeader>`, `<CardTitle>`, `<CardDescription>`, `<CardContent>`, `<CardFooter>`
- **Search & Text Entry**: `<Input>`, `<InputGroup>`, `<Textarea>`
- **Filter Bars & View Toggles**: `<Tabs>`, `<TabsList>`, `<TabsTrigger>`, `<TabsContent>`
- **Accordion & Collapsible Content**: `<Accordion>`, `<AccordionItem>`, `<AccordionTrigger>`, `<AccordionContent>` (used in FAQ)
- **Scroll Containers**: `<ScrollArea>`
- **Loading & Skeleton Fallbacks**: `<Skeleton>`
- **Empty Search States**: `<EmptyState>`

## Spacing Scale (4-point named scale)

- `--space-3xs`: `0.25rem` (4px)
- `--space-2xs`: `0.5rem` (8px)
- `--space-xs`: `0.75rem` (12px)
- `--space-sm`: `1rem` (16px)
- `--space-md`: `1.5rem` (24px)
- `--space-lg`: `2rem` (32px)
- `--space-xl`: `3rem` (48px)
- `--space-2xl`: `4.5rem` (72px)
- `--space-3xl`: `7rem` (112px)

## Motion

- **Easings**: `--ease-out: cubic-bezier(0.16, 1, 0.3, 1)`
- **Duration**: `--dur-short: 200ms`, `--dur-medium: 350ms`
- **Reveal pattern**: Subtle opacity fade-in with 8px Y-slide
- **Reduced-motion fallback**: Opacity transition ≤ 150ms

## Microinteractions Stance

- **Hover transition**: 150ms ease-out on scale/border color
- **Focus ring**: 2px solid `var(--color-focus)` with 2px offset
- **Active state**: 1px downward Y-translate transform on push

## CTA Voice & Navigation

- **Nav Archetype**: `N5 Floating Pill` (glassmorphic backdrop, brand logo, release pill badge, `shadcn/ui` Button triggers)
- **Footer Archetype**: `Ft5 Statement Grid` (curated resource pillars, contribution CTA, social links)
- **Primary CTA**: Solid fill `bg-accent`, pill radius `rounded-full`, uppercase font-mono tracking label
- **Secondary CTA**: Glass backdrop with border stroke `border-rule`

## What Pages MUST Share

- Brand logotype & version tag (`Curated UI v0.3.0`)
- Accent color (`oklch(0.65 0.22 38.5)`) and its placement (≤ 5% per viewport)
- Display & Body font pairing (`Inter Tight` + `Inter`)
- Button border-radius and padding rhythm
- Section heading structure (Category numeral/badge + display heading)
- All interactive controls built on `shadcn/ui` primitives

## What Pages MAY Differ On

- Macrostructure selection within the route family (Marquee Hero vs. Workbench vs. Long Document)
- Filtering density and column layouts for directory vs. document pages
