import { describe, it, expect } from "vitest";
import { existsSync } from "fs";
import { join } from "path";
import { caseStudies } from "@/data/case-studies";
import { pressItems, typeLabels } from "@/data/press";

const publicDir = join(process.cwd(), "public");

describe("case-studies data", () => {
  it("has at least one case study", () => {
    expect(caseStudies.length).toBeGreaterThan(0);
  });

  it("all slugs are unique", () => {
    const slugs = caseStudies.map((cs) => cs.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("all slugs are URL-safe", () => {
    for (const cs of caseStudies) {
      expect(cs.slug).toMatch(/^[a-z0-9-]+$/);
    }
  });

  it("every case study has required fields", () => {
    for (const cs of caseStudies) {
      expect(cs.title).toBeTruthy();
      expect(cs.subtitle).toBeTruthy();
      expect(cs.cardDescription).toBeTruthy();
      expect(cs.image).toBeTruthy();
      expect(cs.tags.length).toBeGreaterThan(0);
      expect(cs.metrics.length).toBeGreaterThan(0);
      expect(cs.sections.problem).toBeTruthy();
      expect(cs.sections.approach).toBeTruthy();
      expect(cs.sections.outcome).toBeTruthy();
    }
  });

  it("images start with /", () => {
    for (const cs of caseStudies) {
      expect(cs.image).toMatch(/^\//);
    }
  });

  it("case study image files exist on disk", () => {
    for (const cs of caseStudies) {
      const filePath = join(publicDir, cs.image);
      expect(existsSync(filePath), `Missing image: ${cs.image}`).toBe(true);
    }
  });

  it("no empty strings in critical fields", () => {
    for (const cs of caseStudies) {
      expect(cs.title.trim()).not.toBe("");
      expect(cs.cardDescription.trim()).not.toBe("");
      expect(cs.sections.problem.trim()).not.toBe("");
      expect(cs.sections.approach.trim()).not.toBe("");
      expect(cs.sections.outcome.trim()).not.toBe("");
    }
  });
});

describe("press data", () => {
  it("has at least one press item", () => {
    expect(pressItems.length).toBeGreaterThan(0);
  });

  it("all IDs are unique", () => {
    const ids = pressItems.map((p) => p.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("every press item has a valid type", () => {
    const validTypes = Object.keys(typeLabels);
    for (const item of pressItems) {
      expect(validTypes).toContain(item.type);
    }
  });

  it("podcasts have either embedUrl or audioUrl", () => {
    const podcasts = pressItems.filter((p) => p.type === "podcast");
    for (const p of podcasts) {
      expect(
        p.embedUrl || p.audioUrl,
        `Podcast "${p.id}" has no embedUrl or audioUrl`
      ).toBeTruthy();
    }
  });

  it("podcasts with embedUrl have valid Spotify embed URLs", () => {
    for (const item of pressItems) {
      if (item.embedUrl && item.embedUrl.includes("spotify")) {
        expect(item.embedUrl).toMatch(/^https:\/\/open\.spotify\.com\/embed\//);
      }
    }
  });

  it("all external URLs are well-formed https URLs", () => {
    for (const item of pressItems) {
      expect(item.url).toMatch(/^https?:\/\//);
    }
  });

  it("audio files referenced in press data exist on disk", () => {
    for (const item of pressItems) {
      if (item.audioUrl) {
        const filePath = join(publicDir, item.audioUrl);
        expect(existsSync(filePath), `Missing audio: ${item.audioUrl}`).toBe(true);
      }
    }
  });

  it("YouTube embed URLs are well-formed", () => {
    for (const item of pressItems) {
      if (item.embedUrl && item.embedUrl.includes("youtube")) {
        expect(item.embedUrl).toMatch(/^https:\/\/www\.youtube\.com\/embed\//);
      }
    }
  });
});
