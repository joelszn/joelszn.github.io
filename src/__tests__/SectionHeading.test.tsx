import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import SectionHeading from "@/components/SectionHeading";

describe("SectionHeading", () => {
  it("renders label and heading", () => {
    render(<SectionHeading label="My Label" heading="My Heading" />);
    expect(screen.getByText("My Label")).toBeInTheDocument();
    expect(screen.getByText("My Heading")).toBeInTheDocument();
  });

  it("renders heading as h2", () => {
    render(<SectionHeading label="Label" heading="Heading" />);
    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent("Heading");
  });
});
