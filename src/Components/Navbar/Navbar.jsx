import React from "react";
import "./navbar.css";
import Input from "../Input/Input";
import notifications from "../images/notifications.png";
import avatar from "../images/Ellipse 9 (2).png";

const Navbar = () => {
  const holder = {
    placeholder: "Search Terminals ID, Agents and Agent Managers",
  };
  return (
    <>
      <section className="navbar">
        <article className="wrapper">
          <div>
            <h1>Dashboard</h1>
          </div>
          <div className="inp">
            <Input holder={holder.placeholder} />
          </div>

          <div className="items">
            <div className="noti">
              {" "}
              <img src={notifications} className="avatars" alt="" />
            </div>{" "}
            <img src={avatar} className="avatarx" alt="" />
            <a href="/" className="lefts">
              <span className="span-one">Segun Peters</span>
              <span className="span-two">Super Agent</span>
            </a>
          </div>
        </article>
      </section>
    </>
  );
};

export default Navbar;
