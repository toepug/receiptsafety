import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            <span className="text-xl font-bold text-[#1E6FCC]">Receipt</span>
            <span className="text-xl font-bold text-[#2E9E6B]">Safety</span>
            <span className="text-xl font-bold text-gray-800">.com</span>
          </Link>
          <nav className="hidden sm:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium text-gray-600 hover:text-[#1E6FCC] transition-colors">Home</Link>
            <Link href="/articles/2026-cashiers-safety-guide" className="text-sm font-medium text-gray-600 hover:text-[#1E6FCC] transition-colors">The Guide</Link>
            <Link href="/resources" className="text-sm font-medium text-gray-600 hover:text-[#1E6FCC] transition-colors">Resources</Link>
            <Link href="/about" className="text-sm font-medium text-gray-600 hover:text-[#1E6FCC] transition-colors">About</Link>
          </nav>
          <Link
            href="/articles/2026-cashiers-safety-guide"
            className="sm:hidden text-sm font-semibold bg-[#1E6FCC] text-white px-4 py-1.5 rounded-lg"
          >
            The Guide
          </Link>
        </div>
      </div>
    </header>
  );
}
