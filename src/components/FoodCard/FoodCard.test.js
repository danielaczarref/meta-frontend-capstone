import React from "react";
import { render, screen } from "@testing-library/react";
import FoodCard from "./FoodCard";
import delivery from "../../assets/delivery.svg";

describe("FoodCard component", () => {
  const sampleData = {
    title: "Pizza Margherita",
    description:
      "Classic Italian pizza with tomatoes, mozzarella cheese, fresh basil, salt, and extra-virgin olive oil.",
    image: "pizza-image.jpg",
    price: "$10.00",
  };

  test("renders the FoodCard component with given data", () => {
    render(<FoodCard {...sampleData} />);

    const imageElement = screen.getByAltText("food");
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute("src", sampleData.image);
    expect(imageElement).toHaveAttribute("height", "200");

    const titleElement = screen.getByText(sampleData.title);
    expect(titleElement).toBeInTheDocument();

    const descriptionElement = screen.getByText(sampleData.description);
    expect(descriptionElement).toBeInTheDocument();

    const priceElement = screen.getByText(sampleData.price);
    expect(priceElement).toBeInTheDocument();

    const deliveryTitleElement = screen.getByText("Order a delivery");
    expect(deliveryTitleElement).toBeInTheDocument();

    const deliveryImageElement = screen.getByAltText("uber eats");
    expect(deliveryImageElement).toBeInTheDocument();
    expect(deliveryImageElement).toHaveAttribute("src", delivery);
  });
});
