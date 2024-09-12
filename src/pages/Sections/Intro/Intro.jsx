import React from "react";
import "./Intro.css";
import { Button } from "../../../components";
import Image from "../../../assets/restaurantchef.jpg";
import { useNavigate } from "react-router-dom";
import pages from "../../../utils/pages";

const Intro = () => {
  const navigate = useNavigate();
  const onClickReserve = () => {
    navigate(pages.get("reservations").path);
  }

  return (
    <div className="intro-background">
      <div className="intro">
        <div>
          <h1 className="title">Little Lemon</h1>
          <h2 className="subtitle">Chicago</h2>
          <p>
            Established in 2007, Little Lemon's Restaurant as founded by chef Rodrigo Santoro, who sought to bring his food experiences to a wider audience. Over the years, the restaurant has become a beloved spot, celebrated for its dedication to quality and creativity.
          </p>
          <Button title={"Reserve a table"} onClick={onClickReserve} />
        </div>

        <img
          className="image"
          src={Image}
          alt="Restaurant food"
          height={200}
          width={200}
        />
      </div>
    </div>
  );
};

export default Intro;
