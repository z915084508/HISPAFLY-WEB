# HISPAFLY Official Website

Official public website for HISPAFLY, built with Next.js, TypeScript, App Router and Tailwind CSS.

This repository contains only the public website deployed at `www.hispafly.es`. The HISPAFLY AOC is a separate application available at `aoc.hispafly.es`.

## Development

```bash
pnpm install
pnpm dev
```

## Production build

```bash
pnpm build
```

## Public fleet data

The `/fleet` page reads public aircraft information from HISPAFLY AOC:

```bash
NEXT_PUBLIC_AOC_PUBLIC_FLEET_URL=https://aoc.hispafly.es/api/public/fleet
```

Only public-safe fleet fields should be exposed by the AOC endpoint.
