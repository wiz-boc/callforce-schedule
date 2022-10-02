import React from "react";

const AddAvailability = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div>
      <div onClick={onClose} className="overlay">
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="modalContainer"
        >
          <div className="modalRight">
            <p className="closeBtn" onClick={onClose}>
              X
            </p>
            <div className="content">
              <div className="task-input">
                <label for="employee-type">Select Employee :</label>
                <select
                  name="employee-type"
                  id="employee-type"
                  className="task-input"
                >
                  <option value=""></option>
                  <option value="Doctor">Doctor</option>
                  <option value="Assistant">Assistant</option>
                  <option value="Hygienist">Hygienist</option>
                </select>
              </div>

              <div className="task-input">
                <label for="start-time">Start time :</label>
                <input
                  className="task-input"
                  type="time"
                  id="start-time"
                  name="start-time"
                  min="09:00"
                  max="18:00"
                  required
                />
              </div>

              <div className="task-input">
                <label for="end-time">End time :</label>
                <input
                  className="task-input"
                  type="time"
                  id="end-time"
                  name="end-time"
                  min="09:00"
                  max="18:00"
                  required
                />
              </div>

              {/* <input
                type="text"
                placeholder="Select Start type"
                className="task-input"
              />
              <input
                type="text"
                placeholder="Select End time"
                className="task-input"
              /> */}
              <button className="button-add" type="submit" onClick={onClose}>
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddAvailability;
