# ReceiptSafety.com — Project Context

## Site Overview
Health information site about BPA/BPS chemical exposure from thermal paper receipts.
Target audience: retail workers and business owners.
Mission: fact-first, authoritative, not scaremongering.

## Tech Stack
- Next.js (App Router) + TypeScript + Tailwind CSS
- Deployed on Vercel, auto-deploy from GitHub master branch
- Articles stored as Markdown files in /content/articles/
- Images in /public/images/

## Project Structure
- /app — Next.js app router pages
- /content/articles/ — Markdown article files
- /components — Reusable React components
- /public/images/ — Static images including logo, favicon, hero images
- /lib/articles.ts — Utility functions for reading and parsing markdown articles

## Key Components
- components/Header.tsx — Sticky header with logo and nav. Mobile hamburger menu. "use client" directive.
- components/PrintButton.tsx — Client component for print functionality on manager memo page.

## Pages
- / — Homepage with hero background image (public/images/hero-bg.jpg), trust bar, problem/solution section, featured article card, quick actions, footer
- /articles — Articles index listing all markdown articles
- /articles/[slug] — Dynamic article page with sidebar, anchor links, bottom CTA
- /resources — Resources/monetization page with affiliate product cards and B2B section (public/images/resources-bg.jpg header)
- /about — About page with mission, approach, audience sections (public/images/about-bg.jpg header)
- /manager-memo — Printable one-page business memo lead magnet
- /privacy-policy — Privacy policy including affiliate disclosure and medical disclaimer
- /terms-of-service — Terms of service

## Articles (in /content/articles/)
- 2026-cashiers-safety-guide.md — Flagship article. 6-part guide for retail cashiers.
- the-science-of-bisphenols.md — Deep dive into history, manufacturing, health impacts, global regulation.
- who-is-at-risk-from-thermal-paper-exposure.md — All professions at risk beyond cashiers (optometrists, pharmacists, ECG techs, etc.)
- how-much-bisphenol-exposure-is-too-much.md — Data-driven comparison of regulatory limits vs real-world exposure for customers and cashiers.

## Article System
- getAllArticles() — scans /content/articles/, parses frontmatter, sorts by date descending
- getArticleBySlug(slug) — reads markdown, parses frontmatter, converts to HTML with remark, strips leading h1, injects anchor IDs for Step headings, adds target="_blank" to external links
- New articles = new .md file in /content/articles/ with frontmatter: title, date, description, slug, featured
- Sitemap at /sitemap.xml auto-generates from getAllArticles() — no manual updates needed

## Article Frontmatter Format
---
title: "Article Title"
date: "2026-05-01"
description: "Article description for SEO and article cards."
slug: "article-slug"
featured: false
---

## Brand
- Colors: primary blue (#1E6FCC), accent green (#2E9E6B), dark navy (#1E3A5F)
- Logo: public/images/logo.png (shield + receipt + chemical structure design)
- Favicon: app/favicon.ico
- Tone: authentic, grounded, accessible to non-educated audience
- Defines complex terms in plain language

## Hero Images
- Homepage: public/images/hero-bg.jpg — cashier handing receipt to customer
- Resources: public/images/resources-bg.jpg
- About: public/images/about-bg.jpg
- All heroes use bg-blue-900/40 overlay for text readability

## Content Strategy
- Fact + Solution model: present the science, then provide actionable steps
- Key 2026 angle: Washington State bisphenol ban, California AB 1604
- Key topics: BPA/BPS in thermal paper, hand sanitizer absorption risk, BPA-Free myth, nitrile gloves, phenol-free paper suppliers

## Monetization
- Affiliate: nitrile gloves, non-toxic skin barriers, Blue4est paper (Amazon affiliate links on /resources)
- B2B referrals: phenol-free paper suppliers, digital receipt POS systems
- Consulting: compliance guides for businesses navigating state bans
- Amazon Associates account required — swap generic Amazon search links for tracked affiliate URLs once approved

## SEO
- Google Search Console verified via Namecheap DNS TXT record
- Sitemap submitted at https://www.receiptsafety.com/sitemap.xml
- robots.ts configured pointing to sitemap
- Each article has title, description, and date frontmatter for metadata

## Deployment
- Platform: Vercel
- Repo: github.com/toepug/receiptsafety
- Domain: ReceiptSafety.com (Namecheap DNS → Vercel)
- Branch: master (auto-deploys on push)

## Publishing Workflow
- Write article content, create .md file in /content/articles/
- Push to GitHub master
- Vercel auto-deploys — article appears on site and in sitemap automatically

## Legal
- Privacy policy at /privacy-policy — includes affiliate disclosure, medical disclaimer, PIPEDA/GDPR considerations
- Terms of service at /terms-of-service
- Both linked in footer

## Contact
- hello@receiptsafety.com (not yet configured — needs email hosting setup)
