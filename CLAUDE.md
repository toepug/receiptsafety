# ReceiptSafety.com — Project Context

## Site Overview
Health information site about BPA/BPS chemical exposure from thermal paper receipts.
Target audience: retail workers and business owners.
Mission: fact-first, authoritative, not scaremongering.

## Tech Stack
- Next.js (App Router) + TypeScript + Tailwind CSS
- Deployed on Vercel, auto-deploy from GitHub main branch
- Articles stored as Markdown files in /content/articles/
- Images in /public/images/

## Project Structure
- /app — Next.js app router pages
- /content/articles/ — Markdown article files
- /components — Reusable React components
- /public/images/ — Static images including logo

## Key Site Pages
- Homepage (/) — Hero, trust signals, CTA to flagship article
- Flagship article (/articles/2026-cashiers-safety-guide) — Main content
- Articles index (/articles) — All articles
- About (/about)
- Resources (/resources) — Links to products, suppliers, tools

## Brand
- Colors: safety blue (#1E6FCC) and green (#2E9E6B)
- Tone: authentic, grounded, accessible to non-educated audience
- Defines complex terms (Endocrine Disruptors, Bisphenols) in plain language

## Content Strategy
- Fact + Solution model: present the science, then provide actionable steps
- Key 2026 angle: Washington State bisphenol ban, California AB 1604
- Key topics: BPA/BPS in thermal paper, hand sanitizer absorption risk, BPA-Free myth (BPS equally harmful), nitrile gloves, phenol-free paper suppliers

## Monetization
- Affiliate: nitrile gloves, non-toxic skin barriers (Amazon)
- B2B referrals: phenol-free paper suppliers (Blue4est), digital receipt POS systems
- Consulting: compliance guides for businesses navigating state bans

## Publishing Workflow
- Articles are Markdown files in /content/articles/
- Claude Code creates new article files directly — no CMS needed
- Pushing to GitHub main triggers auto-deploy on Vercel

## Deployment
- Platform: Vercel
- Repo: github.com/toepug/receiptsafety
- Domain: ReceiptSafety.com (to be pointed to Vercel after setup)
