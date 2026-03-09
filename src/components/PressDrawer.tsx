"use client";

import { useState, useEffect } from "react";
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
  const [iframeState, setIframeState] = useState<"loading" | "loaded" | "error">("loading");

  useEffect(() => { setIframeState("loading"); }, [item?.id]);

  const isOpen = item !== null;
  const isPodcast = item?.type === "podcast";
  const isVideo = item?.type === "video";
  const isArticle = item?.type === "article" || item?.type === "mention";
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

          {/* Podcast: self-hosted audio */}
          {isPodcast && item.audioUrl && (
            <div className="bg-surface px-6 py-5">
              <audio
                controls
                preload="metadata"
                src={item.audioUrl}
                className="w-full"
                style={{ accentColor: "var(--accent)" }}
              >
                Your browser does not support the audio element.
              </audio>
            </div>
          )}

          {/* Video: YouTube embed */}
          {isVideo && item.embedUrl && (
            <div className="bg-black">
              <iframe
                src={item.embedUrl}
                width="100%"
                className="block aspect-video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
                style={{ border: "none" }}
                title={`${item.publication}: ${item.title}`}
              />
            </div>
          )}

          {/* Article: inline iframe embed */}
          {isArticle && hasRealUrl && !item.embedDisabled && (
            <div className="relative bg-black" style={{ height: 480 }}>
              {iframeState !== "loaded" && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-6 w-6 animate-spin rounded-full border-2 border-muted border-t-accent" />
                </div>
              )}
              <iframe
                src={item.url}
                width="100%"
                height="100%"
                loading="lazy"
                className="block h-full w-full"
                style={{ border: "none" }}
                title={`${item.publication}: ${item.title}`}
                onLoad={() => setIframeState("loaded")}
              />
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
                {isPodcast && !item.audioUrl
                  ? "Open on Spotify"
                  : isVideo
                  ? "Watch on YouTube"
                  : item.type === "book"
                  ? "View on Google Books"
                  : "Open in new tab ↗"}
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
