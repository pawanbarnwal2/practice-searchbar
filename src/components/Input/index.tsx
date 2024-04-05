import React from "react";
import "./input.css";

function Input(props) {
  const element =
    props.element === "input" ? (
      <input
        type={props.type}
        id={props.inputId}
        placeholder={props.placeholder}
      />
    ) : (
      <textarea id={props.inputId} rows={4}></textarea>
    );

  return (
    <div className="form-control">
      <label htmlFor={props.inputId}>{props.label}</label>
      {element}
    </div>
  );
}

export default Input;
