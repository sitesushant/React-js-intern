import React, { useState } from "react";

const Accordion = ({ items }) => {
  const [active, setActive] = useState(null);

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <div key={index} className="accordion-item">
          <div
            className="accordion-header"
            onClick={() => setActive(active === index ? null : index)}
          >
            {item.title}
          </div>
          <div className={`accordion-content ${active === index ? "active" : ""}`}>
            {item.content}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
