import React from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import "./home.css";
import Widget from "../Widgets/Widget";
import { FaBeer } from "@react-icons/all-files/fa/FaBeer";

export const Home = () => {
  const data = [
    {
      id: "1",
      title: "User",
      link: "See all users",
      amount: 23333,
      percentage: 20,
      icon: <FaBeer />,
    },
    {
      id: "2",
      title: "Oders",
      link: "See all users",
      icon: "",
      amount: 23333,
      percentage: 20,
    },
    {
      id: "3",
      title: "Earnings",

      link: "See all users",
      icon: "",
      amount: 23333,
      percentage: 20,
    },
    {
      id: "4",
      title: "Balance",
      link: "See all users",
      icon: "",
    },
  ];

  // const sideBarData = [
  //   { id: 1,
  //     Tag: "Dashboard",
  //    icon: < Fabeer/>
  //   },
  //   // { id: 2, Tag: "Dashboard", icon: < Fabeer/> },
  //   // { id: 3, Tag: "Dashboard", icon: "< Fabeer/>" },
  //   // { id: 4, Tag: "Dashboard", icon: "< Fabeer/>" },
  //   // { id: 5, Tag: "Dashboard", icon: "< Fabeer/>" },
  //   // { id: 6, Tag: "Dashboard", icon: "< Fabeer/>" },
  //   // { id: 7, Tag: "Dashboard", icon: "< Fabeer/>" },
  //   // { id: 8, Tag: "Dashboard", icon: "< Fabeer/>" },
  //   // { id: 9, Tag: "Dashboard", icon: "< Fabeer/>" },
  // ];

  const sideBarData = [
    {
      id: "1",
      Tag: "Dashboard",
      icon: <FaBeer />,
    },
    {
      id: "2",
      Tag: "My Account",
      icon: <FaBeer />,
    },
    {
      id: "3",
      Tag: "Agent Management",
      icon: <FaBeer />,
    },
    {
      id: "4",
      Tag: "Terminal Management",
      icon: <FaBeer />,
    },
    {
      id: "5",
      Tag: "Service Management",
      icon: <FaBeer />,
    },
    {
      id: "6",
      Tag: "Providers",
      icon: <FaBeer />,
    },
    {
      id: "7",
      Tag: "Rental ServicesS",
      icon: <FaBeer />,
    },
    {
      id: "8",
      Tag: "Reporting",
      icon: <FaBeer />,
    },
    {
      id: "9",
      Tag: "Settings",
      icon: <FaBeer />,
    },
  ];

  return (
    <>
      <section className="home">
        <article className="sidebar">
          <Sidebar sideBarData={sideBarData} key={sideBarData.id} />
        </article>

        <article className="home-container">
          <Navbar />
          <div className="widgets">
            {data.map((d) => {
              return <Widget data={d} key={data.id} />;
            })}
          </div>
          <div className="charts-component"></div>
        </article>
      </section>
    </>
  );
};

export default Home;
