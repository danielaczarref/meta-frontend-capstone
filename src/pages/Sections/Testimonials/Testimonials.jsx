import React from "react";
import "./Testimonials.css";
import { TestimonialCard } from "../../../components";

const testimonials = [
  {
    id: 1,
    author: "Ahmed Sabbak",
    description:
      "Outstanding dining experience!",
    image:
      "https://t3.ftcdn.net/jpg/05/01/98/44/360_F_501984469_veZxKyCuNxZTtnX3ClBYv7xH9EXMrDIC.jpg",
    rating: 5,
  },
  {
    id: 2,
    author: "Isabela Madrigal",
    description:
      "Please do not miss coming to Little Lemon's Restaurant if you are in Chicago, you won't regret but you will if you don't come.",
    image:
      "https://c4.wallpaperflare.com/wallpaper/311/869/131/women-avi-love-black-hair-brown-eyes-wallpaper-preview.jpg",
    rating: 5,
  },
  {
    id: 3,
    author: "Jonathan B",
    description:
      "We loved every single thing about this restaurant! Excellent food, atmosphere and service! Wish it had drinks though",
    image:
      "https://img.freepik.com/premium-photo/family-with-child-man_873925-35233.jpg",
    rating: 4,
  },
];

const Testimonials = () => {
  return (
    <div className="testimonial-background">
      <div className="testimonials">
        <div className="testimonials-container">
          <h1 className="testimonial-title">Testimonials</h1>
        </div>

        <div className="testimonials-list">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              author={testimonial.author}
              description={testimonial.description}
              image={testimonial.image}
              rating={testimonial.rating}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
