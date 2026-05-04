import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service — ReceiptSafety.com",
  description: "Terms of service for ReceiptSafety.com.",
};

export default function TermsOfServicePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Terms of Service</h1>
      <p className="text-sm text-gray-500 mb-10">Last updated: May 2026</p>

      <div className="space-y-10 text-gray-700 leading-relaxed">

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Acceptance of Terms</h2>
          <p>By accessing ReceiptSafety.com, you agree to these terms. If you do not agree, please do not use this site.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Use of Content</h2>
          <p>All content on this site is for informational purposes only. You may share and link to our content with attribution. You may not reproduce entire articles without permission.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Affiliate Links</h2>
          <p>This site contains affiliate links. See our <Link href="/privacy-policy" className="text-[#1E6FCC] underline">Privacy Policy</Link> for full disclosure.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Disclaimer of Warranties</h2>
          <p>This site is provided &ldquo;as is&rdquo; without warranties of any kind. We make no guarantees about the accuracy, completeness, or suitability of the information provided.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Limitation of Liability</h2>
          <p>ReceiptSafety.com and its owners shall not be liable for any damages arising from use of this site or reliance on its content.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Medical Disclaimer</h2>
          <p>Nothing on this site constitutes medical, legal, or professional advice. Content is for general informational purposes only.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Changes to Terms</h2>
          <p>We reserve the right to update these terms at any time. Continued use of the site constitutes acceptance of updated terms.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Contact</h2>
          <p><a href="mailto:hello@receiptsafety.com" className="text-[#1E6FCC] underline">hello@receiptsafety.com</a></p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Governing Law</h2>
          <p>These terms are governed by the laws of Ontario, Canada.</p>
        </section>

      </div>
    </div>
  );
}
