"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Modal from "@/components/Modal";
import Icon from "@/components/Icon";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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

      <Modal
        open={resumeOpen}
        onClose={() => setResumeOpen(false)}
        labelId="resume-modal-title"
        cardClassName="max-w-3xl h-[90vh]"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-border px-6 py-4">
          <p id="resume-modal-title" className="text-sm font-medium text-foreground">
            Resume
          </p>
          <div className="flex items-center gap-4">
            <a
              href="/resume/JOELDURAN_RESUME.pdf"
              download
              className="inline-flex items-center gap-1.5 text-sm text-accent transition-colors hover:text-accent-hover"
            >
              Download
              <Icon name="download" size={14} />
            </a>
            <button
              onClick={() => setResumeOpen(false)}
              className="rounded-md p-1.5 text-muted transition-colors hover:bg-background hover:text-foreground"
              aria-label="Close resume"
            >
              <Icon name="close" size={18} />
            </button>
          </div>
        </div>

        {/* PDF viewer */}
        <iframe
          src="/resume/JOELDURAN_RESUME.pdf"
          className="flex-1 w-full border-0"
          title="Joel Duran Resume"
        />
      </Modal>
    </>
  );
}
