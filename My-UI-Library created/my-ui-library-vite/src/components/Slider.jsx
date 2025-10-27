import React, { useState } from "react";

const Slider = ({ min = 0, max = 100, step = 1 }) => {
  const [value, setValue] = useState((min + max) / 2);

  return (
    <div className="slider">
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
      />
      <p>Value: {value}</p>
    </div>
  );
};

export default Slider;
