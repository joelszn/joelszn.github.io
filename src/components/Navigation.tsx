"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setResumeOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = resumeOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [resumeOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/80 backdrop-blur-md border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-sm font-medium text-foreground">
            Joel Duran
          </Link>
          <div className="flex items-center gap-6">
            <a
              href="/#work"
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              Work
            </a>
            <a
              href="/#press"
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              Press
            </a>
            <a
              href="/#contact"
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              Contact
            </a>
            <button
              onClick={() => setResumeOpen(true)}
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              Resume
            </button>
          </div>
        </div>
      </nav>

      {/* Resume modal */}
      <>
        {/* Backdrop */}
        <div
          onClick={() => setResumeOpen(false)}
          className={`fixed inset-0 z-40 bg-black/70 backdrop-blur-sm transition-opacity duration-300 ${
            resumeOpen ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
        />

        {/* Modal */}
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ${
            resumeOpen ? "opacity-100 scale-100" : "pointer-events-none opacity-0 scale-95"
          }`}
        >
          <div className="relative flex w-full max-w-3xl flex-col overflow-hidden rounded-xl border border-border bg-surface shadow-2xl"
            style={{ height: "90vh" }}
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-border px-6 py-4">
              <p className="text-sm font-medium text-foreground">Resume</p>
              <div className="flex items-center gap-4">
                <a
                  href="/resume/JOELDURAN_RESUME.pdf"
                  download
                  className="inline-flex items-center gap-1.5 text-sm text-accent transition-colors hover:text-accent-hover"
                >
                  Download
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M8 3v8m0 0l-3-3m3 3l3-3M3 13h10"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
                <button
                  onClick={() => setResumeOpen(false)}
                  className="rounded-md p-1.5 text-muted transition-colors hover:bg-background hover:text-foreground"
                  aria-label="Close"
                >
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path
                      d="M14 4L4 14M4 4l10 10"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* PDF viewer */}
            <iframe
              src="/resume/JOELDURAN_RESUME.pdf"
              className="flex-1 w-full border-0"
              title="Joel Duran Resume"
            />
          </div>
        </div>
      </>
    </>
  );
}
