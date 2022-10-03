import "./App.css";
import Header from "./components/Header";
import AddSchedule from "./components/AddSchedule";
import AddAvailability from "./components/AddAvailability";
import Calender from "./components/Calender";
import React, { useState, useEffect } from "react";

//function App()

const App = () => {
  let [schedules, setSchedules] = useState([]);
  useEffect(() => {
    //console.log(schedules);
  }, [schedules]);

  const [openAddAvailablityModel, setAddAvailablityModal] = useState(false);
  return (
    <div>
      <div>{schedules.length}</div>
      <AddAvailability
        open={openAddAvailablityModel}
        onClose={() => setAddAvailablityModal(false)}
        schedules={schedules}
        setSchedules={setSchedules}
      />

      <div className="container">
        <div className="app-wrapper">
          <div>
            <Header />
          </div>
          <AddSchedule onOpen={() => setAddAvailablityModal(true)} />
          <div>
            <Calender schedules={schedules} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
