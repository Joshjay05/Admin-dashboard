// import { Accordion } from "@mui/material";
import React from "react";
import Accordion from "./Accordion/Accordion";

const Questions = () => {
  const faq = [
    {
      id: 1,
      title: "what do i stand to gain",
      answer:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus molestiae minus eius reprehenderit unde sit incidunt modi iure necessitatibus, quis iusto maxime sint repellat voluptas dolore minima. Vero, deleniti sit!",
    },
    {
      id: 2,
      title: "what do i stand to gain",
      answer:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus molestiae minus eius reprehenderit unde sit incidunt modi iure necessitatibus, quis iusto maxime sint repellat voluptas dolore minima. Vero, deleniti sit!",
    },
    {
      id: 3,
      title: "what do i stand to gain",
      answer:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus molestiae minus eius reprehenderit unde sit incidunt modi iure necessitatibus, quis iusto maxime sint repellat voluptas dolore minima. Vero, deleniti sit!",
    },
    {
      id: 4,
      title: "what do i stand to gain",
      answer:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus molestiae minus eius reprehenderit unde sit incidunt modi iure necessitatibus, quis iusto maxime sint repellat voluptas dolore minima. Vero, deleniti sit!",
    },
  ];
  return (
    <div>
      {faq.map((d) => {
        return <Accordion />;
      })}
    </div>
  );
};

export default Questions;
