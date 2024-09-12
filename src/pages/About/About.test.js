import React from "react";
import { render, screen } from "@testing-library/react";
import About from "./About";

jest.mock("../Sections/About/About", () => () => <div data-testid="about"></div>);

describe("About component", () => {
  test("renders the About section", () => {
    render(<About />);
    const aboutSection = screen.getByTestId("about");
    expect(aboutSection).toBeInTheDocument();
  });
});
