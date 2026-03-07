import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Hero from "@/components/Hero";

describe("Hero", () => {
  it("renders name and title", () => {
    render(<Hero />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Joel Duran");
    expect(screen.getByText("AI Product Manager")).toBeInTheDocument();
  });

  it("renders headshot image with alt text", () => {
    render(<Hero />);
    const img = screen.getByAltText("Joel Duran");
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", "/images/headshot.jpg");
  });

  it("renders a link to work section", () => {
    render(<Hero />);
    const link = screen.getByText("View my work");
    expect(link).toHaveAttribute("href", "#work");
  });

  it("headshot has width and height for CLS prevention", () => {
    render(<Hero />);
    const img = screen.getByAltText("Joel Duran");
    expect(img).toHaveAttribute("width");
    expect(img).toHaveAttribute("height");
  });
});
