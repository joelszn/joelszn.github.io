import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import ConsultingCTA from "@/components/ConsultingCTA";

describe("ConsultingCTA", () => {
  it("renders heading", () => {
    render(<ConsultingCTA />);
    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(
      "I help teams ship AI products that actually work."
    );
  });

  it("renders email link", () => {
    render(<ConsultingCTA />);
    const link = screen.getByText("Start a conversation");
    expect(link).toHaveAttribute("href", "mailto:duranjoel.a@gmail.com");
  });

  it("renders LinkedIn link", () => {
    render(<ConsultingCTA />);
    const link = screen.getByLabelText("LinkedIn profile");
    expect(link).toHaveAttribute("href", "https://www.linkedin.com/in/joeldabr/");
  });

  it("has contact section id for nav linking", () => {
    const { container } = render(<ConsultingCTA />);
    expect(container.querySelector("#contact")).toBeInTheDocument();
  });
});
