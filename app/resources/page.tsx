import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: 'Recommended Resources | ReceiptSafety.com',
  description: 'Vetted products and tools for reducing bisphenol exposure from thermal paper receipts — nitrile gloves, skin barrier creams, and phenol-free paper suppliers.',
  openGraph: {
    title: 'Recommended Resources | ReceiptSafety.com',
    description: 'Vetted products and tools for reducing bisphenol exposure from thermal paper receipts.',
    url: 'https://www.receiptsafety.com/resources',
    siteName: 'ReceiptSafety.com',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.receiptsafety.com/resources',
  },
};

export default function ResourcesPage() {
  return (
    <div className="flex flex-col">

      {/* Page header */}
      <section className="relative overflow-hidden min-h-[300px] flex items-center">
        <Image src="/images/resources-bg.jpg" alt="Retail store environment" fill style={{objectFit:'cover'}} priority />
        <div className="absolute inset-0 bg-blue-900/40" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 text-center text-white">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-4">
            Recommended Resources
          </h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto leading-relaxed">
            Everything on this page is vetted based on effectiveness for reducing bisphenol exposure.
            Some links are affiliate links — we may earn a small commission at no cost to you.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 w-full">

        {/* Section 1 — Protection for Cashiers */}
        <section className="mb-16">
          <p className="text-gray-400 text-xs text-center mb-8">
            Some links below are affiliate links — we may earn a small commission at no cost to you. <a href="/privacy-policy" className="underline hover:text-gray-600">Full disclosure</a>.
          </p>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Protection for Cashiers</h2>
          <p className="text-gray-500 mb-8">
            Simple, low-cost products that create a barrier between you and receipt chemicals.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Card 1 — Nitrile Gloves */}
            <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 flex flex-col">
              <div className="flex items-start justify-between gap-2 mb-3">
                <h3 className="text-lg font-bold text-gray-900 leading-snug">
                  High-Dexterity Nitrile Gloves
                </h3>
                <span className="shrink-0 inline-block bg-[#2E9E6B]/10 text-[#2E9E6B] text-xs font-bold px-2.5 py-1 rounded-full whitespace-nowrap">
                  Most Recommended
                </span>
              </div>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                Thin nitrile gloves designed for food service provide a complete barrier against
                bisphenol absorption. Vinyl and latex are not effective — nitrile only.
              </p>
              <div className="bg-gray-50 rounded-lg p-3 mb-5 text-sm">
                <p className="font-semibold text-gray-700 mb-1">What to look for:</p>
                <p className="text-gray-500">Thickness: 3–4 mil. Powderless. Food-service grade. Blue or black color.</p>
              </div>
              <div className="mt-auto flex flex-col gap-2">
                <a
                  href="https://www.amazon.com/s?k=high+dexterity+nitrile+gloves+food+service"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#1E6FCC] text-white font-semibold text-sm px-4 py-2.5 rounded-lg hover:bg-[#1457a3] transition-colors"
                >
                  Find on Amazon →
                </a>
                <span className="text-center text-xs text-gray-400">Affiliate Link</span>
              </div>
            </div>

            {/* Card 2 — Skin Barrier Cream */}
            <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 flex flex-col">
              <h3 className="text-lg font-bold text-gray-900 leading-snug mb-3">
                Non-Toxic Skin Barrier Cream
              </h3>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                Unlike hand sanitizer — which contains penetration enhancers that increase chemical
                absorption — a true skin barrier cream works in the opposite way. It creates a
                physical film on the skin surface that blocks chemicals from passing through. Think
                of it as an invisible glove. The key is choosing a formula with no penetration
                enhancers.
              </p>
              <div className="bg-gray-50 rounded-lg p-3 mb-5 text-sm">
                <p className="font-semibold text-gray-700 mb-1">What to look for:</p>
                <p className="text-gray-500">Fragrance-free. No alcohol, no glycerin, no propylene glycol. Look for products marketed as &lsquo;work barrier cream&rsquo; or &lsquo;skin protectant&rsquo; — not moisturizers.</p>
              </div>
              <div className="mt-auto flex flex-col gap-2">
                <a
                  href="https://www.amazon.com/s?k=non+toxic+skin+barrier+cream+fragrance+free"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#1E6FCC] text-white font-semibold text-sm px-4 py-2.5 rounded-lg hover:bg-[#1457a3] transition-colors"
                >
                  Find on Amazon →
                </a>
                <span className="text-center text-xs text-gray-400">Affiliate Link</span>
              </div>
            </div>

            {/* Card 3 — Blue4est Paper */}
            <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 flex flex-col">
              <div className="flex items-start justify-between gap-2 mb-3">
                <h3 className="text-lg font-bold text-gray-900 leading-snug">
                  Phenol-Free Thermal Paper (Blue4est)
                </h3>
                <span className="shrink-0 inline-block bg-[#1E6FCC]/10 text-[#1E6FCC] text-xs font-bold px-2.5 py-1 rounded-full whitespace-nowrap">
                  Best for Business Owners
                </span>
              </div>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                Blue4est thermal paper uses a dye-based system with zero bisphenols. A distinctive
                blue-grey tint makes it easy to verify your store has switched.
              </p>
              <div className="bg-gray-50 rounded-lg p-3 mb-5 text-sm">
                <p className="font-semibold text-gray-700 mb-1">What to look for:</p>
                <p className="text-gray-500">Ask your POS supplier for Blue4est by Koehler Paper, or search for phenol-free thermal paper rolls.</p>
              </div>
              <div className="mt-auto flex flex-col gap-2">
                <a
                  href="https://www.amazon.com/s?k=blue4est+thermal+paper"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#1E6FCC] text-white font-semibold text-sm px-4 py-2.5 rounded-lg hover:bg-[#1457a3] transition-colors"
                >
                  Search Suppliers →
                </a>
                <span className="text-center text-xs text-gray-400">Affiliate Link</span>
              </div>
            </div>

          </div>
        </section>

        {/* Section 2 — For Business Owners */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">For Business Owners</h2>
          <p className="text-gray-500 mb-8">
            Compliance tools and safer alternatives for businesses navigating the 2026 Washington
            State bisphenol ban.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Card — Digital Receipts */}
            <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Digital Receipt Systems</h3>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                The safest receipt is no receipt. Modern POS systems like Square, Toast, and
                Lightspeed all support email and SMS receipts at no additional cost.
              </p>
              <ul className="space-y-1.5 mb-4">
                {["Square POS", "Toast (restaurants)", "Lightspeed Retail", "Shopify POS"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2E9E6B] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-sm text-[#2E9E6B] font-medium">
                Eliminates receipt chemical exposure entirely for your staff.
              </p>
            </div>

            {/* Card — Compliance Checklist */}
            <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 flex flex-col">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Free Compliance Checklist</h3>
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                Washington State&apos;s 2026 bisphenol ban affects any business using thermal receipt
                paper. Download our free checklist to verify your store is compliant.
              </p>
              <div className="mt-auto">
                <Link
                  href="/manager-memo"
                  className="inline-flex items-center justify-center gap-2 bg-[#2E9E6B] text-white font-semibold text-sm px-4 py-2.5 rounded-lg hover:bg-[#268a5c] transition-colors"
                >
                  Download Checklist →
                </Link>
              </div>
            </div>

          </div>
        </section>

        {/* Section 3 — Further Reading */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Further Reading</h2>
          <p className="text-gray-500 mb-8">
            Guides, templates, and official sources to learn more.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                title: "The 2026 Cashier's Safety Guide",
                href: "/articles/2026-cashiers-safety-guide",
                external: false,
              },
              {
                title: "Manager Memo Template",
                href: "/manager-memo",
                external: false,
              },
              {
                title: "Washington State Ban Details",
                href: "https://apps.leg.wa.gov/rcw/default.aspx?cite=70A.222",
                external: true,
              },
            ].map(({ title, href, external }) => (
              <a
                key={href}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="group flex items-center justify-between gap-3 bg-white border border-gray-200 rounded-xl px-5 py-4 hover:border-[#1E6FCC] hover:shadow-sm transition-all"
              >
                <span className="text-sm font-semibold text-gray-800 group-hover:text-[#1E6FCC] transition-colors">
                  {title}
                </span>
                <svg className="w-4 h-4 text-gray-400 group-hover:text-[#1E6FCC] shrink-0 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
