import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Footer from "@/components/Footer";

describe("Footer", () => {
  it("renders copyright with current year", () => {
    render(<Footer />);
    const year = new Date().getFullYear();
    expect(screen.getByText(`\u00A9 ${year} Joel Duran`)).toBeInTheDocument();
  });

  it("renders email link", () => {
    render(<Footer />);
    const emailLink = screen.getByText("Email");
    expect(emailLink).toHaveAttribute("href", "mailto:duranjoel.a@gmail.com");
  });

  it("renders LinkedIn link with noopener", () => {
    render(<Footer />);
    const link = screen.getByText("LinkedIn");
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", expect.stringContaining("noopener"));
  });

  it("renders GitHub link with noopener", () => {
    render(<Footer />);
    const link = screen.getByText("GitHub");
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", expect.stringContaining("noopener"));
  });
});
