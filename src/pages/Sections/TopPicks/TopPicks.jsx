import React from "react";
import "./TopPicks.css";
import { Button, FoodCard } from "../../../components";
import { useNavigate } from "react-router-dom";
import pages from "../../../utils/pages";

const topPicks = [
  {
    id: 1,
    title: "Bruschetta",
    description:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    image:
      "https://hips.hearstapps.com/hmg-prod/images/bruschetta-index-645d03e6f174d.jpg?crop=0.8890414878397711xw:1xh;center,top&resize=1200:*",
    price: "$ 5.99",
  },
  {
    id: 2,
    title: "Molasses-Soy Glazed Salmon and Vegetables",
    description:
      "Delicious salmon fillets with brown rice, toasted sesame seeds, minced garlic, yellow bell pepers, soy sauce and lemon slice.",
    image:
      "https://www.southernliving.com/thmb/XIHmbOagRrWxoOOrYnQih5VEV9A=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/2548301_QFSHe_646_0_0_0-fbd2a27e126942c8b33dbc3d696b0501.jpg",
    price: "$32.99",
  },
  {
    id: 3,
    title: "Lemon Dessert",
    description:
      "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    image:
      "https://www.southernliving.com/thmb/z706skTv8rLcnFwyTEnMzr_H5zQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Southern-Living_27364_SR_Lemon-Lush_13190-fd96c709fc2946a7aeb5c869f9ad470e.jpg",
    price: "$ 5.99",
  },
];

const TopPicks = () => {
  const navigate = useNavigate();

  const onClickMenu = () => {
    navigate(pages.get("menu").path);
  };
  return (
    <div className="top-picks">
      <div className="header-container">
        <h1 className="top-picks-title">Top Picks</h1>
        <Button title={"Online Menu"} onClick={onClickMenu} />
      </div>

      <div className="header-list">
        {topPicks.map((topPick) => (
          <FoodCard
            key={topPick.id}
            title={topPick.title}
            description={topPick.description}
            image={topPick.image}
            price={topPick.price}
          />
        ))}
      </div>
    </div>
  );
};

export default TopPicks;
