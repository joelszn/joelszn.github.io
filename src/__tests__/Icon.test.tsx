import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Icon from "@/components/Icon";

describe("Icon", () => {
  it("renders an SVG with correct size", () => {
    const { container } = render(<Icon name="arrowRight" size={24} />);
    const svg = container.querySelector("svg");
    expect(svg).toBeInTheDocument();
    expect(svg).toHaveAttribute("width", "24");
    expect(svg).toHaveAttribute("height", "24");
  });

  it("defaults to size 16", () => {
    const { container } = render(<Icon name="close" />);
    const svg = container.querySelector("svg");
    expect(svg).toHaveAttribute("width", "16");
    expect(svg).toHaveAttribute("height", "16");
  });

  it("is hidden from screen readers", () => {
    const { container } = render(<Icon name="external" />);
    const svg = container.querySelector("svg");
    expect(svg).toHaveAttribute("aria-hidden", "true");
  });

  it("applies custom className", () => {
    const { container } = render(<Icon name="download" className="text-red-500" />);
    const svg = container.querySelector("svg");
    expect(svg).toHaveClass("text-red-500");
  });

  it("renders a path element with stroke", () => {
    const { container } = render(<Icon name="chevronLeft" />);
    const path = container.querySelector("path");
    expect(path).toBeInTheDocument();
    expect(path).toHaveAttribute("stroke", "currentColor");
  });
});
