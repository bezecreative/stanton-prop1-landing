# Stanton Healthcare — Pastor Partners Landing Page

A single-page site Stanton Healthcare can send to partner pastors around the
Treasure Valley about Idaho's Proposition 1. Built as static HTML and CSS with
no build step, using the color, type, radius, and shadow tokens extracted from
stantonhealthcare.org (see `design/DESIGN.md`).

## Structure

| Section | What it is |
|---|---|
| Header | Purple bar, Stanton logo, "Email Us" button |
| Hero + letter | The board's letter to pastors, shown as a card over a brand-gradient banner |
| Resources | Nine drop-downs (native `<details>` elements, keyboard and screen-reader friendly) |
| Closing CTA | Link to www.stopprop1.org |
| Footer | Contact details and link back to stantonhealthcare.org |

## Editing copy

All text lives in `index.html`. Each drop-down is a `<details id="dropdown-N">`
block. Linking to `/#dropdown-3` opens that drop-down automatically.

## Run locally

```bash
npx serve .
```

## Deploy

The site deploys to Vercel with zero configuration. Connect the GitHub repo in
the Vercel dashboard, or run:

```bash
vercel --prod
```
