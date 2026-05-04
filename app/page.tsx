import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col">

      {/* Hero */}
      <section className="relative overflow-hidden min-h-[580px] flex items-center">
        <Image src="/images/hero-bg.jpg" alt="Cashier handling receipt at register" fill style={{objectFit:'cover'}} priority />
        <div className="absolute inset-0 bg-blue-900/40" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 py-24 text-center text-white">
          <div className="inline-flex items-center gap-2 bg-white/20 text-white text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            <span className="w-2 h-2 bg-[#2E9E6B] rounded-full inline-block"></span>
            2026 Washington State Bisphenol Ban Now in Effect
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            You Handle Toxic Chemicals
            <br className="hidden sm:block" /> Every Day
          </h1>
          <p className="text-lg sm:text-xl text-blue-100 max-w-2xl mx-auto mb-10 leading-relaxed">
            Thermal paper receipts contain BPA or BPS — hormone-disrupting chemicals absorbed through your skin. Here&apos;s what the science says, and what you can do about it.
          </p>
          <Link
            href="/articles/2026-cashiers-safety-guide"
            className="inline-flex items-center gap-2 bg-white text-[#1E6FCC] font-semibold text-lg px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors shadow-lg"
          >
            Read the 2026 Cashier&apos;s Safety Guide
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-gray-50 border-y border-gray-200 py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center gap-2">
              <div className="w-10 h-10 bg-[#1E6FCC]/10 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-[#1E6FCC]" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div className="font-bold text-xl text-gray-900">10+ Scientific Studies</div>
              <div className="text-sm text-gray-500">Peer-reviewed research cited throughout</div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-10 h-10 bg-[#2E9E6B]/10 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-[#2E9E6B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="font-bold text-xl text-gray-900">2026 WA State Ban</div>
              <div className="text-sm text-gray-500">Bisphenols now restricted in receipts</div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div className="font-bold text-xl text-gray-900">100x More Absorption</div>
              <div className="text-sm text-gray-500">With hand sanitizer use</div>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem / Solution */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Understanding the Risk</h2>
            <p className="text-gray-500 max-w-xl mx-auto">The science is clear. The good news: small changes make a big difference.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* The Fact */}
            <div className="bg-red-50 border border-red-100 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-red-900">The Fact</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                BPA and BPS are <strong>endocrine disruptors</strong> — chemicals that mimic hormones in your body. They&apos;re found in <strong>93% of thermal paper receipts</strong> and absorb through your skin on contact.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Cashiers handle 300–500 receipts per shift. Studies show their BPA blood levels are significantly higher than the general population. Using hand sanitizer first increases absorption by up to 100 times.
              </p>
              <div className="mt-4 pt-4 border-t border-red-200">
                <p className="text-xs text-red-700 font-semibold uppercase tracking-wide">
                  Endocrine disruptors = chemicals that interfere with your body&apos;s hormones
                </p>
              </div>
            </div>

            {/* The Solution */}
            <div className="bg-green-50 border border-green-100 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-[#2E9E6B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-green-900">The Solution</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Simple, low-cost steps <strong>dramatically reduce your exposure</strong>. You don&apos;t need to quit your job or spend a lot of money.
              </p>
              <ul className="space-y-3 text-gray-700">
                {[
                  "Wear nitrile gloves during receipt handling",
                  "Never apply hand sanitizer before handling receipts",
                  "Ask management to switch to phenol-free paper",
                  "Offer digital receipts to customers whenever possible",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-[#2E9E6B] mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Featured article card */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Guide</h2>
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-200">
            <div className="bg-gradient-to-r from-[#1E6FCC] to-[#1457a3] p-8 text-white">
              <div className="inline-flex items-center bg-[#2E9E6B] text-white text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
                2026 Edition
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-3">
                The Cashier&apos;s Complete Safety Guide to BPA &amp; BPS
              </h3>
              <p className="text-blue-100 max-w-xl leading-relaxed">
                Everything a retail worker needs to know about receipt chemicals — the science, the risks, and exactly what to do about it. Updated for 2026 state regulations.
              </p>
            </div>
            <div className="p-6 sm:p-8">
              <div className="flex flex-wrap gap-6 mb-6 text-sm text-gray-500">
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  15 min read
                </span>
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  10+ studies cited
                </span>
                <span className="flex items-center gap-1.5 text-[#2E9E6B] font-medium">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  2026 WA &amp; CA regulations covered
                </span>
              </div>
              <Link
                href="/articles/2026-cashiers-safety-guide"
                className="inline-flex items-center gap-2 bg-[#1E6FCC] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#1457a3] transition-colors"
              >
                Read Now
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link href="/articles" className="text-sm font-semibold text-[#1E6FCC] hover:underline">
              View All Articles →
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Take Action Today</h2>
            <p className="text-gray-500">Three things you can do right now — no cost, no equipment needed.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">

            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-[#1E6FCC]/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-[#1E6FCC]" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">The Scratch Test</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Scratch the back of your receipt with a fingernail. A dark mark means it&apos;s thermal paper — and likely contains BPA or BPS.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">The Sanitizer Strike</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Stop applying hand sanitizer before handling receipts. Ethanol in sanitizer opens skin pores and increases BPA absorption by up to 100x.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-[#2E9E6B]/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-[#2E9E6B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">The Manager Memo</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Print and hand our one-page compliance brief to your manager. It covers the WA state ban, cost-neutral paper alternatives, and liability basics.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <div className="py-1">
                <div className="bg-white rounded-lg p-2 inline-block">
                  <Image src="/images/logo.png" alt="ReceiptSafety.com" width={150} height={40} />
                </div>
              </div>
              <p className="text-sm mt-1">Protecting retail workers with science-backed guidance.</p>
            </div>
            <nav className="flex flex-wrap justify-center gap-6 text-sm">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <Link href="/articles/2026-cashiers-safety-guide" className="hover:text-white transition-colors">The Guide</Link>
              <Link href="/articles" className="hover:text-white transition-colors">Articles</Link>
              <Link href="/resources" className="hover:text-white transition-colors">Resources</Link>
              <Link href="/about" className="hover:text-white transition-colors">About</Link>
            </nav>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-6 text-xs text-center space-y-2">
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
            <p>© 2026 ReceiptSafety.com. For informational purposes only. Not medical advice.</p>
          </div>
        </div>
      </footer>

    </div>
  );
}
