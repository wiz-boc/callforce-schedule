import React from "react";

const AddSchedule = ({ onOpen }) => {
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

export default AddSchedule;
