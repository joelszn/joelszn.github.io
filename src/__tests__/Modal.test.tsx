import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Modal from "@/components/Modal";

describe("Modal", () => {
  it("renders children when open", () => {
    render(
      <Modal open={true} onClose={vi.fn()}>
        <p>Modal content</p>
      </Modal>
    );
    expect(screen.getByText("Modal content")).toBeInTheDocument();
  });

  it("renders children when closed (CSS hidden)", () => {
    render(
      <Modal open={false} onClose={vi.fn()}>
        <p>Hidden content</p>
      </Modal>
    );
    // Content is in DOM but visually hidden via opacity-0/pointer-events-none
    expect(screen.getByText("Hidden content")).toBeInTheDocument();
  });

  it("calls onClose when backdrop is clicked", () => {
    const onClose = vi.fn();
    render(
      <Modal open={true} onClose={onClose}>
        <p>Content</p>
      </Modal>
    );
    // Backdrop is the first div with aria-hidden
    const backdrop = document.querySelector('[aria-hidden="true"]') as HTMLElement;
    fireEvent.click(backdrop);
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("calls onClose on Escape key when open", () => {
    const onClose = vi.fn();
    render(
      <Modal open={true} onClose={onClose}>
        <p>Content</p>
      </Modal>
    );
    fireEvent.keyDown(window, { key: "Escape" });
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("does NOT call onClose on Escape key when closed", () => {
    const onClose = vi.fn();
    render(
      <Modal open={false} onClose={onClose}>
        <p>Content</p>
      </Modal>
    );
    fireEvent.keyDown(window, { key: "Escape" });
    expect(onClose).not.toHaveBeenCalled();
  });

  it("locks body scroll when open", () => {
    const { rerender } = render(
      <Modal open={true} onClose={vi.fn()}>
        <p>Content</p>
      </Modal>
    );
    expect(document.body.style.overflow).toBe("hidden");

    rerender(
      <Modal open={false} onClose={vi.fn()}>
        <p>Content</p>
      </Modal>
    );
    expect(document.body.style.overflow).toBe("");
  });

  it("sets aria-labelledby when labelId is provided", () => {
    render(
      <Modal open={true} onClose={vi.fn()} labelId="my-title">
        <p id="my-title">Title</p>
      </Modal>
    );
    expect(screen.getByRole("dialog")).toHaveAttribute("aria-labelledby", "my-title");
  });
});
