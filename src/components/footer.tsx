import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border px-6 pt-10 pb-10">
      <div className="max-w-[680px] mx-auto">
        <div className="flex flex-col sm:flex-row sm:justify-between gap-8">
          <div className="flex flex-col gap-2">
            <Link
              href="/about"
              className="text-[13px] text-muted hover:text-primary transition-colors duration-200 py-1"
            >
              About
            </Link>
            <Link
              href="/blog"
              className="text-[13px] text-muted hover:text-primary transition-colors duration-200 py-1"
            >
              Writing
            </Link>
            <a
              href="mailto:hello@maidah.org"
              className="text-[13px] text-muted hover:text-primary transition-colors duration-200 py-1"
            >
              Contact
            </a>
          </div>
          <div className="flex flex-col gap-2">
            <a
              href="https://instagram.com/maidah"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] text-muted hover:text-primary transition-colors duration-200 py-1"
            >
              Instagram
            </a>
            <a
              href="https://x.com/maidah"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] text-muted hover:text-primary transition-colors duration-200 py-1"
            >
              X
            </a>
            <a
              href="mailto:hello@maidah.org"
              className="text-[13px] text-muted hover:text-primary transition-colors duration-200 py-1"
            >
              Email
            </a>
          </div>
        </div>
        <p className="text-xs text-placeholder mt-10">&copy; 2026 Maidah</p>
      </div>
    </footer>
  );
}
