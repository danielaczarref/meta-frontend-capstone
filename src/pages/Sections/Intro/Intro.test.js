import React from "react";
import { render, screen } from "@testing-library/react";

import { BrowserRouter } from "react-router-dom";
import Intro from "./Intro";

test("renders Intro component without errors", () => {
  render(
    <BrowserRouter>
      <Intro />
    </BrowserRouter>
  );

  expect(screen.getByText("Little Lemon")).toBeInTheDocument();
  expect(screen.getByText("Chicago")).toBeInTheDocument();
  expect(
    screen.getByText(
      "Established in 2007, Little Lemon's Restaurant as founded by chef Rodrigo Santoro, who sought to bring his food experiences to a wider audience. Over the years, the restaurant has become a beloved spot, celebrated for its dedication to quality and creativity."
    )
  ).toBeInTheDocument();
  expect(screen.getByText("Reserve a table")).toBeInTheDocument();
  expect(screen.getByAltText("Restaurant food")).toBeInTheDocument();
});
