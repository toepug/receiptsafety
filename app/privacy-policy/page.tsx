import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — ReceiptSafety.com",
  description: "Privacy policy for ReceiptSafety.com, including affiliate disclosure and medical disclaimer.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
      <p className="text-sm text-gray-500 mb-10">Last updated: May 2026</p>

      <div className="space-y-10 text-gray-700 leading-relaxed">

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Information We Collect</h2>
          <p>We do not collect personal information unless you voluntarily contact us via email. We use standard web analytics (if applicable) that may collect anonymous usage data such as pages visited and browser type.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Cookies</h2>
          <p>This site does not currently use tracking cookies. If this changes, this policy will be updated.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Affiliate Disclosure</h2>
          <p>ReceiptSafety.com participates in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com. When you click an affiliate link and make a purchase, we may earn a small commission at no additional cost to you. We only recommend products we believe are genuinely useful.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Third Party Links</h2>
          <p>This site contains links to external websites. We are not responsible for the privacy practices or content of those sites.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Data Sharing</h2>
          <p>We do not sell, trade, or share any personal information with third parties.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Contact</h2>
          <p>For privacy-related questions, contact us at <a href="mailto:hello@receiptsafety.com" className="text-[#1E6FCC] underline">hello@receiptsafety.com</a>.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Medical Disclaimer</h2>
          <p>The content on ReceiptSafety.com is for informational purposes only and does not constitute medical advice. Always consult a qualified healthcare professional for medical concerns.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Governing Law</h2>
          <p>This policy is governed by the laws of Ontario, Canada.</p>
        </section>

      </div>
    </div>
  );
}
