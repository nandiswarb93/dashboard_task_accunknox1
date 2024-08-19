import React from "react";
import "./Widget.css";

const Widget = ({ widget, Remove }) => {
  return (
    <div className="widget-container">
      <h3>{widget.name}</h3>
      <p>{widget.text}</p>
      <button onClick={Remove} className="remove-widget-btn">
        x
      </button>
    </div>
  );
};
export default Widget;
