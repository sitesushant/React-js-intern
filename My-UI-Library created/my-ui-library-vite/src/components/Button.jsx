import React from "react";

const Button = ({ label = "Click Me", onClick }) => {
  return (
    <button className="button" onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
