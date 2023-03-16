import React from "react";
import "./sidebar.css";

// import { AccountBalanceIcon } from "@mui/icons-material/AccountBalance";

const Sidebar = ({ sideBarData }) => {
  return (
    <section>
      {/* <article className="top"></article> */}
      <article className="center">
        <ul>
          {sideBarData.map((sideBarData) => {
            return (
              <li>
                {" "}
                {sideBarData.icon} {sideBarData.Tag}{" "}
              </li>
            );
          })}
        </ul>
      </article>
      <hr></hr>

      <section className="semi-bottom">
        <div>
          <h3>Logout</h3>
          <p>Super Agent</p>
        </div>
        <div></div>
      </section>
      <article className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </article>
    </section>
  );
};

export default Sidebar;

// material ui for icons
