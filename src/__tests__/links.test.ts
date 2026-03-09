import { describe, it, expect } from "vitest";
import { existsSync } from "fs";
import { join } from "path";
import { caseStudies } from "@/data/case-studies";
import { pressItems } from "@/data/press";

const publicDir = join(process.cwd(), "public");

describe("link validation", () => {
  it("all case study image paths point to files that exist in public/", () => {
    for (const cs of caseStudies) {
      const filePath = join(publicDir, cs.image);
      expect(existsSync(filePath), `Missing: ${cs.image}`).toBe(true);
    }
  });

  it("audio files referenced in press data exist", () => {
    for (const item of pressItems) {
      if (item.audioUrl) {
        const filePath = join(publicDir, item.audioUrl);
        expect(existsSync(filePath), `Missing audio: ${item.audioUrl}`).toBe(true);
      }
    }
  });

  it("all press item external URLs are https", () => {
    for (const item of pressItems) {
      expect(item.url, `Press item "${item.id}" has non-https URL`).toMatch(
        /^https:\/\//
      );
    }
  });

  it("all case study slugs produce valid URL paths", () => {
    for (const cs of caseStudies) {
      const path = `/case-studies/${cs.slug}`;
      expect(path).toMatch(/^\/case-studies\/[a-z0-9-]+$/);
    }
  });

  it("no press item has an empty title or publication", () => {
    for (const item of pressItems) {
      expect(item.title.trim(), `Empty title for "${item.id}"`).not.toBe("");
      expect(item.publication.trim(), `Empty publication for "${item.id}"`).not.toBe("");
    }
  });

  it("spotify embed URLs use the embed path format", () => {
    for (const item of pressItems) {
      if (item.embedUrl?.includes("spotify")) {
        expect(item.embedUrl).toMatch(/open\.spotify\.com\/embed\//);
      }
    }
  });
});
