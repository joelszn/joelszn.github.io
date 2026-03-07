"use client";

import type { PressItem } from "@/data/press";
import { typeLabels } from "@/data/press";
import Modal from "@/components/Modal";
import Icon from "@/components/Icon";

export default function PressModal({
  item,
  onClose,
}: {
  item: PressItem | null;
  onClose: () => void;
}) {
  const isOpen = item !== null;
  const isPodcast = item?.type === "podcast";
  const hasRealUrl = item?.url && item.url !== "#";

  return (
    <Modal open={isOpen} onClose={onClose} labelId="press-modal-title">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-border px-6 py-4">
        <div>
          <span className="text-xs uppercase tracking-widest text-muted">
            {item ? typeLabels[item.type] : ""}
          </span>
          <p id="press-modal-title" className="mt-0.5 text-base font-semibold text-foreground">
            {item?.publication}
          </p>
        </div>
        <button
          onClick={onClose}
          className="rounded-md p-1.5 text-muted transition-colors hover:bg-background hover:text-foreground"
          aria-label="Close"
        >
          <Icon name="close" size={18} />
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
                title={`${item.publication}: ${item.title}`}
              />
            </div>
          )}

          {/* Article: link preview (most sites block iframes via X-Frame-Options) */}

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
                {isPodcast
                  ? "Open on Spotify"
                  : item.type === "book"
                  ? "View on Google Books"
                  : "Read full article"}
                <Icon name="external" size={14} />
              </a>
            )}

            {!hasRealUrl && (
              <p className="mt-4 text-sm text-muted">Link coming soon.</p>
            )}
          </div>
        </div>
      )}
    </Modal>
  );
}
