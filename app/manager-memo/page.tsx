import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PrintButton from "@/components/PrintButton";

export const metadata: Metadata = {
  title: "Manager Safety Memo — ReceiptSafety.com",
  description:
    "A printable one-page memo for retail managers on BPA/BPS chemical exposure from thermal paper receipts, including regulatory context and recommended actions.",
  alternates: {
    canonical: "https://receiptsafety.com/manager-memo",
  },
};

export default function ManagerMemoPage() {
  return (
    <>
      {/* Print button — hidden when printing */}
      <div className="no-print bg-gray-50 border-b border-gray-200 py-3 px-4 flex items-center justify-between">
        <Link
          href="/articles/2026-cashiers-safety-guide"
          className="text-sm text-gray-500 hover:text-[#1E6FCC] transition-colors"
        >
          ← Back to the Guide
        </Link>
        <PrintButton />
      </div>

      {/* Memo document */}
      <div className="memo-page max-w-3xl mx-auto px-8 py-10 bg-white">

        {/* Letterhead */}
        <div className="memo-header flex items-start justify-between mb-6 pb-4 border-b-2 border-[#1E6FCC]">
          <div>
            <div className="py-1">
              <Image src="/images/logo.png" alt="ReceiptSafety.com" width={180} height={46} />
            </div>
            <p className="text-sm text-gray-500 mt-0.5">Science-backed guidance for retail workers</p>
          </div>
          <div className="text-right">
            <p className="text-sm font-semibold text-gray-700">Manager Safety Memo</p>
            <p className="text-sm text-gray-500">April 2026</p>
          </div>
        </div>

        {/* Memo metadata */}
        <table className="memo-meta w-full mb-6 text-sm">
          <tbody>
            <tr>
              <td className="font-semibold text-gray-600 pr-4 py-0.5 w-16">TO:</td>
              <td className="text-gray-800">Store Manager / HR Representative</td>
            </tr>
            <tr>
              <td className="font-semibold text-gray-600 pr-4 py-0.5">FROM:</td>
              <td className="text-gray-800">Retail Staff / ReceiptSafety.com</td>
            </tr>
            <tr>
              <td className="font-semibold text-gray-600 pr-4 py-0.5">DATE:</td>
              <td className="text-gray-800">April 2026</td>
            </tr>
            <tr>
              <td className="font-semibold text-gray-600 pr-4 py-0.5 align-top">RE:</td>
              <td className="text-gray-900 font-bold">Workplace Chemical Exposure — Thermal Paper Receipts</td>
            </tr>
          </tbody>
        </table>

        <hr className="border-gray-200 mb-6" />

        {/* Opening */}
        <p className="text-gray-700 leading-relaxed mb-6">
          This memo is to bring your attention to a documented occupational health concern affecting
          retail cashiers. Thermal paper receipts used in most point-of-sale systems contain
          bisphenol compounds (BPA or BPS) — chemicals classified as endocrine disruptors by
          multiple health agencies.
        </p>

        {/* Section 1 */}
        <section className="mb-6">
          <h2 className="memo-section-heading">1. The Regulatory Context</h2>
          <p className="text-gray-700 leading-relaxed">
            Washington State enacted a full ban on bisphenols in thermal paper effective 2026
            (RCW&nbsp;70A.222). California AB&nbsp;1604 is currently pending, which would extend
            similar protections statewide. These laws reflect a growing scientific consensus that
            receipt chemical exposure poses a measurable health risk to workers who handle receipts
            daily.
          </p>
        </section>

        {/* Section 2 */}
        <section className="mb-6">
          <h2 className="memo-section-heading">2. The Risk to Your Staff</h2>
          <ul className="memo-list">
            <li>
              Cashiers handle hundreds of receipts daily, resulting in significantly higher
              bisphenol exposure than the general population.
            </li>
            <li>
              Dermal absorption increases by up to <strong>100×</strong> when hands are wet
              with sanitizer or lotion at time of contact.
            </li>
            <li>
              &ldquo;BPA-Free&rdquo; paper typically contains BPS, which carries equivalent
              health risks — the label does not indicate a safer product.
            </li>
          </ul>
        </section>

        {/* Section 3 */}
        <section className="mb-6">
          <h2 className="memo-section-heading">3. Recommended Actions</h2>
          <p className="text-sm text-gray-500 mb-3">Listed from lowest to highest cost.</p>

          <div className="memo-actions space-y-3">
            <div className="memo-action-card">
              <div className="memo-action-label">Option 1 — Policy Change</div>
              <div className="memo-action-cost">Free</div>
              <p className="text-gray-700 text-sm leading-relaxed mt-1">
                Instruct staff to dry hands fully before handling receipts, and to handle
                receipts from the edges or unprinted back side. No procurement required.
              </p>
            </div>

            <div className="memo-action-card">
              <div className="memo-action-label">Option 2 — Protective Equipment</div>
              <div className="memo-action-cost">~$15 / month per station</div>
              <p className="text-gray-700 text-sm leading-relaxed mt-1">
                Provide thin nitrile gloves at point-of-sale stations. Note: vinyl and latex
                gloves are not effective — bisphenols penetrate them. Use nitrile only.
              </p>
            </div>

            <div className="memo-action-card memo-action-card--recommended">
              <div className="memo-action-label">Option 3 — Paper Switch</div>
              <div className="memo-action-cost">Cost-neutral</div>
              <p className="text-gray-700 text-sm leading-relaxed mt-1">
                Switch to phenol-free thermal paper such as <strong>Blue4est</strong> or
                equivalent. Pricing is comparable to standard thermal paper and eliminates
                bisphenol exposure at the source.
              </p>
            </div>
          </div>
        </section>

        {/* Closing */}
        <section className="mb-8">
          <p className="text-gray-700 leading-relaxed">
            For scientific references, phenol-free supplier contacts, and further compliance
            guidance, visit{" "}
            <span className="text-[#1E6FCC] font-semibold">ReceiptSafety.com/resources</span>.
          </p>
        </section>

        {/* Footer */}
        <div className="memo-footer border-t border-gray-200 pt-4 flex items-center justify-between text-xs text-gray-400">
          <span>Prepared with information from ReceiptSafety.com</span>
          <span>April 2026</span>
        </div>

      </div>

      <style>{`
        @media print {
          .no-print { display: none !important; }

          body { margin: 0; }

          .memo-page {
            max-width: 100%;
            margin: 0;
            padding: 1.5cm 2cm;
            box-shadow: none;
          }

          .memo-section-heading {
            color: #1E6FCC !important;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }

          .memo-action-card {
            border: 1px solid #e5e7eb !important;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }

          .memo-action-card--recommended {
            background-color: #f0faf5 !important;
            border-color: #2E9E6B !important;
          }
        }

        .memo-section-heading {
          font-size: 0.875rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: #1E6FCC;
          margin-bottom: 0.5rem;
        }

        .memo-list {
          list-style: none;
          padding: 0;
          margin: 0;
          space-y: 0.5rem;
        }

        .memo-list li {
          padding-left: 1.25rem;
          position: relative;
          color: #374151;
          line-height: 1.6;
          margin-bottom: 0.5rem;
        }

        .memo-list li::before {
          content: "•";
          position: absolute;
          left: 0;
          color: #1E6FCC;
          font-weight: bold;
        }

        .memo-action-card {
          border: 1px solid #e5e7eb;
          border-radius: 0.5rem;
          padding: 0.875rem 1rem;
        }

        .memo-action-card--recommended {
          background-color: #f0faf5;
          border-color: #2E9E6B;
        }

        .memo-action-label {
          font-weight: 700;
          font-size: 0.875rem;
          color: #111827;
          display: inline;
          margin-right: 0.5rem;
        }

        .memo-action-cost {
          display: inline;
          font-size: 0.75rem;
          font-weight: 600;
          color: #6b7280;
          background: #f3f4f6;
          padding: 0.125rem 0.5rem;
          border-radius: 9999px;
        }

        .memo-action-card--recommended .memo-action-cost {
          background: #dcfce7;
          color: #166534;
        }
      `}</style>
    </>
  );
}
