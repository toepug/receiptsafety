import Link from 'next/link'
import Header from '@/components/Header'

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-6 py-24">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-8xl font-bold text-[#1E6FCC] mb-4">404</div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Page Not Found</h1>
          <p className="text-gray-500 mb-10">The page you&apos;re looking for doesn&apos;t exist or has been moved.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            <Link href="/articles/2026-cashiers-safety-guide" className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition text-left">
              <div className="text-[#1E6FCC] font-semibold mb-1">Read the Safety Guide</div>
              <div className="text-gray-500 text-sm">The 2026 Cashier&apos;s Guide to receipt chemicals</div>
            </Link>
            <Link href="/articles" className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition text-left">
              <div className="text-[#1E6FCC] font-semibold mb-1">Browse All Articles</div>
              <div className="text-gray-500 text-sm">Science-backed guides on bisphenol exposure</div>
            </Link>
            <Link href="/resources" className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition text-left">
              <div className="text-[#1E6FCC] font-semibold mb-1">Recommended Resources</div>
              <div className="text-gray-500 text-sm">Products and tools to reduce your exposure</div>
            </Link>
          </div>

          <Link href="/" className="inline-block bg-[#1E6FCC] text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
            Go Home
          </Link>
        </div>
      </main>
    </>
  )
}
