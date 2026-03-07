import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import ConsultingCTA from "@/components/ConsultingCTA";

describe("ConsultingCTA", () => {
  it("renders heading", () => {
    render(<ConsultingCTA />);
    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(
      "Building an AI product?"
    );
  });

  it("renders email link", () => {
    render(<ConsultingCTA />);
    const link = screen.getByText("Get in touch");
    expect(link).toHaveAttribute("href", "mailto:duranjoel.a@gmail.com");
  });

  it("has contact section id for nav linking", () => {
    const { container } = render(<ConsultingCTA />);
    expect(container.querySelector("#contact")).toBeInTheDocument();
  });
});
