# Blog Card

A customizable Blog Card UI component built as a [GreatFrontEnd Projects](https://www.greatfrontend.com/projects) challenge.

## What I built

A reusable `BlogCard` React component that displays a blog post preview with a cover image, dynamic category tags, title, subtitle, and a "Read more" button. The component is fully prop-driven, meaning all content and styling can be controlled from the outside.

The implementation went through an iterative process: starting from a hardcoded version, then progressively making the card customizable, extracting sub-components (`CardTag`), and finally adding proper behavior like ellipsis truncation and button state variants.

## Tech stack

- **React** + **TypeScript** — component structure and type-safe props
- **Vite** — dev server and bundler
- **Tailwind CSS** — utility-first styling
- **class-variance-authority (CVA)** — managing button style variants

## Component structure

```
src/
├── components/
│   ├── BlogCard.tsx     # Main card component
│   ├── CardTag.tsx      # Individual tag pill
│   └── Credits.tsx      # Attribution footer
├── services/
│   └── ellipsis.ts      # Text truncation utility
└── App.tsx              # Usage example
```

## Key decisions & trade-offs

### CVA for button variants
The "Read more" button has two states: `primary` (active, with a URL) and `disabled` (no URL provided). Instead of scattering conditional class strings inline, I used CVA to declare the variants declaratively. This keeps the intent clear and makes it easy to add new variants later.

### Ellipsis as a service
Text truncation (`title` and `subtitle`) is handled by a small utility function in `services/ellipsis.ts` rather than pure CSS `text-overflow`. This gives full control over the character limit and avoids relying on fixed container heights for the truncation to kick in. The trade-off is that the limit is set at call time (in `App.tsx`), so it's not automatic — but it keeps the component itself simpler and free of layout assumptions.

### CardTag fully driven by Tailwind class strings
The `CardTag` component receives `bgColor`, `borderColor`, and `textColor` as raw Tailwind class strings (e.g. `"bg-[#F0FDF4]"`). This keeps the component generic and lets the consumer define any color without needing to extend a theme or add new variants. The downside is that it bypasses Tailwind's static class detection, so arbitrary values must be passed explicitly — but for a component-level challenge this is an acceptable trade-off.

### No CSS ellipsis
Using a JavaScript utility for truncation instead of `overflow: hidden; text-overflow: ellipsis` means the truncation works regardless of container width changes and produces consistent output. It also appends `...` only when the text actually exceeds the limit, preserving a trailing `.` if the text already ends with a period.

## Possible next steps

- **Storybook integration** — document `BlogCard` and `CardTag` in isolation, making it easier to visualize all prop combinations and states (primary button, disabled button, multiple tags, long vs short text)
- **Responsive layout** — the card currently has fixed dimensions (`w-85`, `h-126`). Adding breakpoint-aware sizing would make it usable in real grid layouts
- **Skeleton loading state** — a shimmer placeholder while image/data loads would round out the component for real-world use
- **CardTag color tokens** — instead of accepting raw Tailwind class strings, define a set of named color presets (`"green" | "blue" | "red"`) mapped internally. This would restore Tailwind's static class detection and prevent invalid classes from slipping through
- **Unit tests** — cover the `ellipsis` utility edge cases (exactly at limit, ends with period, empty string) and snapshot-test the card variants
- **Image aspect ratio enforcement** — currently the image is fixed at `h-72`. Using `aspect-video` or `object-cover` with a flexible height would prevent layout shifts with differently-sized images

## Running locally

```bash
npm install
npm run dev
```
