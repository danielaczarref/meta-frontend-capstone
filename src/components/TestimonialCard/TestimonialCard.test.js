import React from "react";
import { render, screen } from "@testing-library/react";
import TestimonialCard from "./TestimonialCard";

describe("TestimonialCard component", () => {
  const sampleData = {
    author: "John Doe",
    description: "This is a sample testimonial.",
    image: "profile-picture.jpg",
    rating: 4,
  };

  test("renders the TestimonialCard component with given data", () => {
    render(
      <TestimonialCard
        author={sampleData.author}
        description={sampleData.description}
        image={sampleData.image}
        rating={sampleData.rating}
      />
    );

    const authorElement = screen.getByText(sampleData.author);
    expect(authorElement).toBeInTheDocument();

    const descriptionElement = screen.getByText(sampleData.description);
    expect(descriptionElement).toBeInTheDocument();

    const starIcons = screen.getAllByAltText("star");
    expect(starIcons.length).toBe(sampleData.rating);
  });
});
