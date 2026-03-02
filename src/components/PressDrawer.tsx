"use client";

import { useEffect, useState } from "react";
import type { PressItem } from "@/data/press";

const typeLabels: Record<string, string> = {
  article: "Article",
  podcast: "Podcast",
  book: "Book",
  mention: "Mention",
};

export default function PressModal({
  item,
  onClose,
}: {
  item: PressItem | null;
  onClose: () => void;
}) {
  const isOpen = item !== null;
  // Track whether article iframe was blocked by the external site
  const [iframeBlocked, setIframeBlocked] = useState(false);

  // Reset iframe state each time a new item opens
  useEffect(() => {
    setIframeBlocked(false);
  }, [item?.url]);

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const isPodcast = item?.type === "podcast";
  const hasRealUrl = item?.url && item.url !== "#";

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-black/70 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Centered modal */}
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ${
          isOpen ? "opacity-100 scale-100" : "pointer-events-none opacity-0 scale-95"
        }`}
      >
        <div className="relative flex w-full max-w-2xl flex-col overflow-hidden rounded-xl border border-border bg-surface shadow-2xl">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-border px-6 py-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-muted">
                {item ? typeLabels[item.type] : ""}
              </span>
              <p className="mt-0.5 text-base font-semibold text-foreground">
                {item?.publication}
              </p>
            </div>
            <button
              onClick={onClose}
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

          {/* Body */}
          {item && (
            <div className="flex flex-col overflow-y-auto">
              {/* Podcast: Spotify embed */}
              {isPodcast && item.embedUrl && (
                <div className="bg-black">
                  <iframe
                    src={item.embedUrl}
                    width="100%"
                    height="152"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                    className="block"
                    style={{ border: "none" }}
                  />
                </div>
              )}

              {/* Article: iframe browser */}
              {!isPodcast && hasRealUrl && !iframeBlocked && (
                <div className="relative" style={{ height: "60vh" }}>
                  <iframe
                    src={item.url}
                    className="h-full w-full border-0"
                    title={item.title}
                    sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
                    onError={() => setIframeBlocked(true)}
                  />
                  {/* Overlay hint to open externally if needed */}
                  <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between bg-gradient-to-t from-surface/90 to-transparent px-4 pb-3 pt-8 pointer-events-none">
                    <span className="text-xs text-muted pointer-events-auto">
                      {item.title}
                    </span>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pointer-events-auto inline-flex items-center gap-1 rounded-md bg-surface border border-border px-3 py-1.5 text-xs text-accent transition-colors hover:text-accent-hover"
                    >
                      Open in new tab
                      <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                        <path d="M7 3H3v10h10V9M9 3h4v4M13 3l-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                  </div>
                </div>
              )}

              {/* Description + CTA */}
              <div className="px-6 py-6">
                <p className="text-sm font-medium text-foreground">{item.title}</p>
                {item.description && (
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                )}

                {hasRealUrl && (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-sm text-accent transition-colors hover:text-accent-hover"
                  >
                    {isPodcast ? "Open on Spotify" : (item.type === "book" ? "View on Google Books" : "Read full article")}
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                      <path d="M7 3H3v10h10V9M9 3h4v4M13 3l-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                )}

                {!hasRealUrl && (
                  <p className="mt-4 text-sm text-muted">Link coming soon.</p>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
