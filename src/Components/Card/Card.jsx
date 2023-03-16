import React from "react";
import "./card.css";
import down from "../images/down.png";

const Card = () => {
  return (
    <div className="uppercard">
      <p>TimeFrame:All-time</p>{" "}
      <span>
        <img src={down} alt="" />
      </span>
    </div>
  );
};

export default Card;
