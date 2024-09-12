import React from "react";
import { render, screen } from "@testing-library/react";
import Menu from "./Menu";

jest.mock("../../components/FoodCard/FoodCard", () => () => <div data-testid="food-card"></div>);

describe("Menu component", () => {
  test("renders the FoodCard component", () => {
    render(<Menu />);
    const foodCardSection = screen.getByTestId("food-card");
    expect(foodCardSection).toBeInTheDocument();
  });
});
