import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import TopPicks from "./TopPicks";

jest.mock("../../../components/Button/Button", () => () => <button>Online Menu</button>);
jest.mock("../../../components/FoodCard/FoodCard", () => () => <div>Food Card</div>);

describe("TopPicks component", () => {
  test("renders the TopPicks component with the title and Online Menu button", () => {
    render(
      <MemoryRouter>
        <TopPicks />
      </MemoryRouter>
    );

    const topPicksTitle = screen.getByText("Top Picks");
    expect(topPicksTitle).toBeInTheDocument();

    const button = screen.getByText("Online Menu");
    expect(button).toBeInTheDocument();
  });
});
