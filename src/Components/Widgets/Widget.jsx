import React from "react";
import "./widgets.css";

const Widget = ({ data }) => {
  // [id,title,link,icon,amount,percentage] = data;

  return (
    <article className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">{data.amount} </span>
        <span className="link">{data.link} </span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <li></li> {data.percentage}
        </div>
        <li>{data.icon} </li>
      </div>
    </article>
  );
};

export default Widget;
