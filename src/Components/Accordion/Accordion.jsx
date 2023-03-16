import React from "react";

const Accordion = ({ faq }) => {
  return (
    <section>
      <article>
        <h1 className="title"> {faq.title} </h1>
        <p className="answer">{faq.answer}</p>
      </article>
    </section>
  );
};

export default Accordion;
