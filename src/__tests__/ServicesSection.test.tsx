import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import ServicesSection from "@/components/ServicesSection";

describe("ServicesSection", () => {
  it("renders all three service cards", () => {
    render(<ServicesSection />);
    expect(screen.getByText("AI Product Strategy")).toBeInTheDocument();
    expect(screen.getByText("0→1 AI Development")).toBeInTheDocument();
    expect(screen.getByText("AI Adoption & Growth")).toBeInTheDocument();
  });

  it("renders the section label", () => {
    render(<ServicesSection />);
    expect(screen.getByText("How I Can Help")).toBeInTheDocument();
  });

  it("each service has a description", () => {
    render(<ServicesSection />);
    expect(
      screen.getByText(/Roadmapping, PRDs, and go-to-market/)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Taking AI features from concept to shipped product/)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Increasing engagement/)
    ).toBeInTheDocument();
  });
});
