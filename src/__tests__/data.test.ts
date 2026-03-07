import { describe, it, expect } from "vitest";
import { caseStudies } from "@/data/case-studies";
import { pressItems, typeLabels } from "@/data/press";

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

  it("podcasts have embedUrl", () => {
    const podcasts = pressItems.filter((p) => p.type === "podcast");
    for (const p of podcasts) {
      expect(p.embedUrl).toBeTruthy();
    }
  });

  it("embedUrls are Spotify embed URLs", () => {
    for (const item of pressItems) {
      if (item.embedUrl) {
        expect(item.embedUrl).toMatch(/^https:\/\/open\.spotify\.com\/embed\//);
      }
    }
  });
});
