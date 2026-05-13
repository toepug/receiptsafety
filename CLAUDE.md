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
- /public/images/ — Static images
- /lib/articles.ts — Utility functions for reading and parsing markdown articles

## Key Components
- components/Header.tsx — Sticky header with logo and nav. Mobile hamburger menu. "use client" directive.
- components/PrintButton.tsx — Client component for print functionality on manager memo page.

## Pages
- / — Homepage with hero background image (public/images/hero-bg.jpg)
- /articles — Articles index listing all markdown articles
- /articles/[slug] — Dynamic article page with sidebar, anchor links, bottom CTA
- /resources — Resources/monetization page (public/images/resources-bg.jpg header)
- /about — About page (public/images/about-bg.jpg header)
- /manager-memo — Printable one-page business memo lead magnet
- /privacy-policy — Privacy policy including affiliate disclosure and medical disclaimer
- /terms-of-service — Terms of service
- /not-found — Custom 404 page with helpful links

## Articles (in /content/articles/)
- 2026-cashiers-safety-guide.md — Flagship article. 6-part guide for retail cashiers.
- the-science-of-bisphenols.md — Deep dive into history, manufacturing, health impacts, global regulation.
- who-is-at-risk-from-thermal-paper-exposure.md — All professions at risk beyond cashiers.
- how-much-bisphenol-exposure-is-too-much.md — Data-driven comparison of regulatory limits vs real-world exposure.
- which-retailers-use-bpa-free-receipt-paper.md — 2026 retailer scorecard, who has switched and who hasn't.

## Article System
- getAllArticles() — scans /content/articles/, parses frontmatter, sorts by date descending
- getArticleBySlug(slug) — reads markdown, parses frontmatter, converts to HTML with remark, strips leading h1, injects anchor IDs for Step headings, adds target="_blank" to external links
- New articles = new .md file in /content/articles/ with frontmatter: title, date, description, slug, featured
- Sitemap at /sitemap.xml auto-generates from getAllArticles() — no manual updates needed
- Articles index and sitemap update automatically on every push — no code changes needed

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

## Images
- Homepage hero: public/images/hero-bg.jpg
- Resources hero: public/images/resources-bg.jpg
- About hero: public/images/about-bg.jpg
- OG social share: public/images/og-default.png (1200x630px)
- All heroes use bg-blue-900/40 overlay for text readability

## Content Strategy
- Fact + Solution model: present the science, then provide actionable steps
- Key 2026 angle: Washington State bisphenol ban (effective Jan 1 2026), California AB 1604 pending
- Key topics: BPA/BPS in thermal paper, hand sanitizer absorption risk, BPA-Free myth, nitrile gloves, phenol-free paper suppliers

## Monetization
- Affiliate: nitrile gloves, non-toxic skin barriers, Blue4est paper (Amazon links on /resources)
- Amazon Associates application pending — replace generic Amazon search links with tracked affiliate URLs once approved
- B2B referrals: phenol-free paper suppliers, digital receipt POS systems
- Consulting: compliance guides for businesses navigating state bans

## SEO
- Google Search Console verified via Namecheap DNS TXT record
- Sitemap submitted at https://www.receiptsafety.com/sitemap.xml
- robots.ts configured allowing all crawlers including facebookexternalhit, Twitterbot, LinkedInBot
- Per-page metadata with Open Graph and Twitter card tags on all pages
- Each article has generateMetadata() pulling from frontmatter

## Legal
- Privacy policy at /privacy-policy — includes affiliate disclosure, medical disclaimer, PIPEDA/GDPR
- Terms of service at /terms-of-service
- Affiliate disclosure line on /resources page
- Both legal pages linked in footer

## Footer
- Contains nav links: Home, The Guide, Articles, Resources, About
- Legal links: Privacy Policy, Terms of Service
- Affiliate disclosure note
- Copyright line with medical disclaimer

## Deployment
- Platform: Vercel
- Repo: github.com/toepug/receiptsafety
- Domain: ReceiptSafety.com
- DNS: Namecheap BasicDNS → A record @ 76.76.21.21, CNAME www → cname.vercel-dns.com
- Google Search Console TXT record: google-site-verification=5tR0NqJa8erPC6lSu3cR465Zjykkxt-qKjJh49
- Branch: master (auto-deploys on push)

## Publishing Workflow
- Write article content, create .md file in /content/articles/
- Push to GitHub master
- Vercel auto-deploys — article appears on site, articles index, and sitemap automatically

## Pending Tasks
- Amazon Associates approval — swap generic Amazon links for tracked affiliate URLs
- Email hosting — hello@receiptsafety.com needs to be configured (Namecheap Private Email or forwarding)
- Newsletter signup — articles reference "Safe Hands Newsletter" but no signup exists yet
- 4 more planned articles: BPA and fertility, business compliance guide, BPA in money/cash, whole-life BPA reduction guide

## Contact
- hello@receiptsafety.com (not yet configured)
