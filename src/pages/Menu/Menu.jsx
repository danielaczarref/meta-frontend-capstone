import React from "react";
import { FoodCard } from "../../components";
import "./Menu.css";
import { starters, mainCourse, desserts } from "./MenuData";

const Menu = () => {
  return (
    <div className="menu">
      <div className="header-container">
        <h1 className="starter-title">Starters</h1>
      </div>

      <div className="header-list">
        {starters.map((starter) => (
          <FoodCard
            key={starter.id}
            title={starter.title}
            description={starter.description}
            image={starter.image}
            price={starter.price}
          />
        ))}
      </div>

      <div className="sec-header-container">
        <h1 className="starter-title">Main Course</h1>
      </div>

      <div className="header-list">
        {mainCourse.map((main) => (
          <FoodCard
            key={main.id}
            title={main.title}
            description={main.description}
            image={main.image}
            price={main.price}
          />
        ))}
      </div>

      <div className="sec-header-container">
        <h1 className="starter-title">Desserts</h1>
      </div>

      <div className="header-list">
        {desserts.map((dessert) => (
          <FoodCard
            key={dessert.id}
            title={dessert.title}
            description={dessert.description}
            image={dessert.image}
            price={dessert.price}
          />
        ))}
      </div>
    </div>
  );
};
export default Menu;
