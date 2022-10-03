import React, { useState, useEffect } from "react";
import Schedule from "../Models/Schedule";
import { checkForNullorEmptyString } from "../Assets/js/calender";

const AddAvailability = ({ open, onClose, schedules, setSchedules }) => {
  let [errors, setErrors] = useState("");

  useEffect(() => {}, [schedules], errors);
  if (!open) return null;

  let isValidated = () => {
    setErrors("");

    let isValid = true;
    let selectedEmployee = document.getElementById("employee-type").value;
    let startTime = document.getElementById("start-time").value;
    let endTime = document.getElementById("end-time").value;

    //let tempErrors = [];
    if (!checkForNullorEmptyString(selectedEmployee)) {
      isValid = false;
    }
    if (!checkForNullorEmptyString(startTime)) {
      isValid = false;
    }
    if (!checkForNullorEmptyString(endTime)) {
      isValid = false;
    }

    if (startTime >= endTime) {
      setErrors("Start time cannot be greater or equal to end time");
      console.log(errors);
      isValid = false;
    }

    //setErrors(tempErrors);

    return isValid;
  };

  let addSchedule = () => {
    let selectedEmployee = document.getElementById("employee-type").value;
    let startTime = document.getElementById("start-time").value;
    let endTime = document.getElementById("end-time").value;

    let eTimeMin = endTime.split(":")[1].trim(); //endTime.substring(endTime.indexOf(":") + 1).trim();
    let eTimeHour = endTime.split(":")[0].trim(); //endTime.substring(1, endTime.indexOf(":") - 1).trim();
    let sTimeMin = startTime.split(":")[1].trim(); //startTime.substring(1, startTime.indexOf(":") + 1).trim();
    let sTimeHour = startTime.split(":")[0].trim(); //startTime.substring(1, startTime.indexOf(":") - 1).trim();

    // sTimeHour = 9;
    // sTimeMin = 30;
    // eTimeHour = 10;
    // eTimeMin = 11;

    if (eTimeMin > 15 && eTimeMin > 45) {
      eTimeMin = 30;
    } else {
      eTimeMin = 0;
    }

    if (sTimeMin > 15 && sTimeMin < 45) {
      sTimeMin = 30;
    } else {
      sTimeMin = 0;
    }

    let schedule = new Schedule(
      new Date(2022, 9, 29, sTimeHour, sTimeMin, 0),
      new Date(2022, 9, 29, eTimeHour, eTimeMin, 0),
      selectedEmployee
    );

    let objIndex = schedules.findIndex(
      (obj) =>
        obj.endTime.getTime() >= schedule.startTime.getTime() &&
        obj.startTime.getTime() <= schedule.startTime.getTime() &&
        obj.employeeType === schedule.employeeType
    );
    if (objIndex !== -1) {
      //if (schedules[objIndex].endTime > schedule.endTime) {
      schedule.startTime = schedules[objIndex].startTime;
      //}
    }

    objIndex = schedules.findIndex(
      (obj) =>
        obj.startTime.getTime() <= schedule.endTime.getTime() &&
        obj.endTime.getTime() >= schedule.endTime.getTime() &&
        obj.employeeType === schedule.employeeType
    );
    if (objIndex !== -1) {
      //if (schedules[objIndex].startTime < schedule.startTime) {
      schedule.endTime = schedules[objIndex].endTime;
      //}
    }

    setSchedules([...schedules, schedule]);
  };

  let onSubmit = (e) => {
    e.preventDefault();
    //addAvailableSlot();
    if (isValidated()) {
      onClose();
      addSchedule();
    }
  };

  return (
    <div>
      <div onClick={onClose} className="overlay">
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="modalContainer"
        >
          <form className="modalRight" onSubmit={onSubmit}>
            <p className="closeBtn" onClick={onClose}>
              X
            </p>
            <div className="content">
              <div className="task-input">
                <label htmlFor="employee-type">Select Employee :</label>
                <select
                  name="employee-type"
                  id="employee-type"
                  className="task-input"
                  required
                >
                  <option value=""></option>
                  <option value="Doctor">Doctor</option>
                  <option value="Assistant">Assistant</option>
                  <option value="Hygienist">Hygienist</option>
                </select>
              </div>

              <div className="task-input">
                <label htmlFor="start-time">Start time :</label>
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
                <label htmlFor="end-time">End time :</label>
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
              <label className="ErrorMessage">{errors}</label>

              <button className="button-add" type="submit">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddAvailability;
