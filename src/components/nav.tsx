import Link from "next/link";

export function Nav() {
  return (
    <nav className="w-full bg-white pt-12 pb-4 px-6 sm:px-12">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <Link
          href="/"
          className="text-sm font-medium text-primary tracking-wide"
        >
          Maidah
        </Link>
        <div className="flex items-center gap-6">
          <Link
            href="/about"
            className="text-[13px] text-muted hover:text-primary transition-colors duration-200"
          >
            About
          </Link>
          <Link
            href="/blog"
            className="text-[13px] text-muted hover:text-primary transition-colors duration-200"
          >
            Writing
          </Link>
        </div>
      </div>
    </nav>
  );
}
