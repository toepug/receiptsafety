import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About — ReceiptSafety.com",
  description:
    "ReceiptSafety.com translates peer-reviewed research on bisphenol exposure into plain language — paired with practical solutions for retail workers and business owners.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col">

      {/* Hero */}
      <section className="relative overflow-hidden min-h-[300px] flex items-center">
        <Image src="/images/about-bg.jpg" alt="Retail worker at register" fill style={{objectFit:'cover'}} priority />
        <div className="absolute inset-0 bg-blue-900/40" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 text-center text-white">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-4">
            Why ReceiptSafety.com Exists
          </h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto leading-relaxed">
            Every day, millions of retail workers handle hundreds of receipts without knowing they
            contain hormone-disrupting chemicals. The science on bisphenol exposure is clear — but
            it rarely reaches the people most affected by it.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 w-full">

        {/* Mission */}
        <section className="mb-16">
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
            ReceiptSafety.com exists to change that. We translate peer-reviewed research into plain
            language, and pair every fact with a practical solution.
          </p>
        </section>

        {/* Our Approach */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Our Approach</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">

            <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
              <div className="w-10 h-10 bg-[#1E6FCC]/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-[#1E6FCC]" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Fact-First</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We don&apos;t exaggerate risks or minimize them. We present what the peer-reviewed
                science says and let it speak for itself.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
              <div className="w-10 h-10 bg-[#2E9E6B]/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-[#2E9E6B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Solution-Focused</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Every problem we identify comes with at least one practical, low-cost solution
                anyone can implement today.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
              <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Accessible</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We define every technical term. No science background required to understand or act
                on anything here.
              </p>
            </div>

          </div>
        </section>

        {/* Who This Is For */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Who This Is For</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

            <div className="bg-[#1E6FCC]/5 border border-[#1E6FCC]/20 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-[#1E6FCC] rounded-full flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900">Retail Workers</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Cashiers, pharmacy techs, bank tellers, and anyone who handles receipts daily. You
                deserve to know what you&apos;re touching and how to protect yourself.
              </p>
            </div>

            <div className="bg-[#2E9E6B]/5 border border-[#2E9E6B]/20 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-[#2E9E6B] rounded-full flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900">Business Owners &amp; Managers</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                The 2026 Washington State bisphenol ban is the first of many. We help businesses
                understand their compliance obligations and make the switch to safer alternatives
                before it becomes a legal requirement.
              </p>
            </div>

          </div>
        </section>

        {/* Transparency */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Transparency</h2>
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
            <p className="text-gray-600 text-sm leading-relaxed">
              ReceiptSafety.com earns revenue through affiliate links to recommended products and
              referral partnerships with phenol-free paper suppliers. These relationships never
              influence our editorial recommendations — we only recommend products we would use
              ourselves. All content is for informational purposes only and does not constitute
              medical or legal advice.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section>
          <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-8 text-center">
            <h2 className="text-xl font-bold text-gray-900 mb-2">Get in Touch</h2>
            <p className="text-gray-500 mb-6 max-w-md mx-auto">
              Have a question or want to discuss compliance consulting for your business?
            </p>
            <a
              href="mailto:hello@receiptsafety.com"
              className="inline-flex items-center justify-center gap-2 bg-[#1E6FCC] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#1457a3] transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Get in Touch
            </a>
          </div>
        </section>

      </div>
    </div>
  );
}
