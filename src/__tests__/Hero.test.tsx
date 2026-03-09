import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Hero from "@/components/Hero";

describe("Hero", () => {
  it("renders name", () => {
    render(<Hero />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Joel Duran");
  });

  it("renders subtitle", () => {
    render(<Hero />);
    expect(screen.getByText("I ship AI products at scale.")).toBeInTheDocument();
  });

  it("renders headshot image with alt text", () => {
    render(<Hero />);
    const img = screen.getByAltText("Joel Duran");
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", "/images/headshot.jpg");
  });

  it("renders a link to work section", () => {
    render(<Hero />);
    const link = screen.getByText("See my work");
    expect(link).toHaveAttribute("href", "#work");
  });

  it("renders a link to contact section", () => {
    render(<Hero />);
    const link = screen.getByText("Let's talk");
    expect(link).toHaveAttribute("href", "#contact");
  });

  it("renders LinkedIn link", () => {
    render(<Hero />);
    const link = screen.getByLabelText("LinkedIn profile");
    expect(link).toHaveAttribute("href", "https://www.linkedin.com/in/joeldabr/");
  });

  it("headshot has width and height for CLS prevention", () => {
    render(<Hero />);
    const img = screen.getByAltText("Joel Duran");
    expect(img).toHaveAttribute("width");
    expect(img).toHaveAttribute("height");
  });
});
