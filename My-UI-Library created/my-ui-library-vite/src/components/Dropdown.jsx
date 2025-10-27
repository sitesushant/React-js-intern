import React, { useState } from "react";

const Dropdown = ({ options = [], onSelect }) => {
  const [selected, setSelected] = useState(options[0] || "Select");

  const handleSelect = (option) => {
    setSelected(option);
    if (onSelect) onSelect(option);
  };

  return (
    <div className="dropdown">
      <button className="button">{selected}</button>
      <div className="dropdown-content">
        {options.map((opt, i) => (
          <div key={i} onClick={() => handleSelect(opt)}>
            {opt}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
