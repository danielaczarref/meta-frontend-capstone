import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "./Home";

jest.mock("../Sections/Intro/Intro", () => () => <div data-testid="intro-section"></div>);
jest.mock("../Sections/TopPicks/TopPicks", () => () => <div data-testid="top-picks-section"></div>);
jest.mock("../Sections/Testimonials/Testimonials", () => () => <div data-testid="testimonials-section"></div>);
jest.mock("../Sections/About/About", () => () => <div data-testid="about"></div>);

describe("Home component", () => {
  test("renders the Intro, TopPicks, Testimonials, and About sections", () => {
    render(<Home />);

    const introSection = screen.getByTestId("intro-section");
    expect(introSection).toBeInTheDocument();

    const topPicksSection = screen.getByTestId("top-picks-section");
    expect(topPicksSection).toBeInTheDocument();

    const testimonialsSection = screen.getByTestId("testimonials-section");
    expect(testimonialsSection).toBeInTheDocument();

    const aboutSection = screen.getByTestId("about");
    expect(aboutSection).toBeInTheDocument();
  });
});
