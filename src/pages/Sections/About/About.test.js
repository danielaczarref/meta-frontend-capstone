import React from "react";
import { render, screen } from "@testing-library/react";
import About from "./About";

describe("About component", () => {
  test("renders the About component with the title, subtitle, and images", () => {
    render(<About />);

    const title = screen.getByText("Little Lemon");
    expect(title).toBeInTheDocument();

    const subtitle = screen.getByText("Chicago");
    expect(subtitle).toBeInTheDocument();

    const images = screen.getAllByRole("img");
    expect(images.length).toBeGreaterThan(0);
  });
});
