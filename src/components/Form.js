import React from "react";

const Form = ({ onOpen }) => {
  return (
    <div>
      <div className="btn-form">
        <button className="button-add" type="submit" onClick={onOpen}>
          Add Availability
        </button>
      </div>
    </div>
  );
};

export default Form;
