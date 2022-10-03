import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { formatTime, Item } from "../Assets/js/calender";

const Calender = ({ schedules }) => {
  let [times, setTimes] = useState([]);

  useEffect(() => {
    loadTimes();
    //console.log(schedules);
  }, [schedules]);

  let setAvailability = (dateTime, employeeType) => {
    let isAvailability = false;
    let isFirstDate = false;
    if (schedules != null && schedules.length > 0) {
      schedules.forEach((schedule) => {
        if (schedule.employeeType === employeeType) {
          if (schedule.startTime <= dateTime && schedule.endTime >= dateTime) {
            isAvailability = true;
          }
          if (
            schedule.startTime.getTime() === dateTime.getTime() &&
            !isFirstDate
          ) {
            isFirstDate = true;
          }
        }
      });
    }
    return { isAvailability, isFirstDate };
  };

  document.getElementById("sample");
  let loadTimes = () => {
    //setcurrentTime(new Date(2022, 9, 29, 9, 0, 0));
    let currentTime = new Date(2022, 9, 29, 9, 0, 0);
    let currentTime2 = new Date(2022, 9, 29, 18, 0, 0);
    let temDates = [];

    while (currentTime <= currentTime2) {
      let temDate = new Date(2022, 9, 29, 9, 0, 0);
      temDate.setHours(currentTime.getHours());
      temDate.setMinutes(currentTime.getMinutes());
      temDates.push(temDate);
      currentTime.setMinutes(currentTime.getMinutes() + 30);
    }

    setTimes(temDates);
  };

  return (
    <div className="calenderContainer">
      <div className="calenderHeader"></div>
      <div className="CalenderEmployeeTypes"></div>
      <div id="calenderData" className="calenderData">
        <Box
          sx={{ width: "20%" }}
          xs={{ width: "20%" }}
          sm={{ width: "20%" }}
          md={{ width: "20%" }}
        >
          <Grid
            container
            columns={{ xs: 4, sm: 4, md: 4 }}
            className="columnMain"
          >
            <Item
              sx={{ width: "100%" }}
              xs={{ width: "100%" }}
              sm={{ width: "100%" }}
              md={{ width: "100%" }}
              className="HeaderItem"
              header="true"
            >
              TIME
            </Item>
          </Grid>
          <Grid container columns={{ xs: 4, sm: 4, md: 4 }}>
            {times.map((dateTime, index) => (
              <Grid
                item
                xs={6}
                sm={6}
                md={6}
                key={index}
                className="columnMain"
              >
                <Item key={index}>{formatTime(dateTime)}</Item>
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            columns={{ xs: 4, sm: 4, md: 4 }}
            className="columnMain"
          >
            <Item
              sx={{ width: "100%" }}
              xs={{ width: "100%" }}
              sm={{ width: "100%" }}
              md={{ width: "100%" }}
              header="true"
            >
              Doctor
            </Item>
          </Grid>

          <Grid container columns={{ xs: 4, sm: 4, md: 4 }}>
            {times.map((dateTime, index) => (
              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                key={index}
                className="columnMain"
              >
                <Item
                  key={index}
                  header={setAvailability(
                    dateTime,
                    "Doctor"
                  ).isAvailability.toString()}
                >
                  <div>
                    {setAvailability(dateTime, "Doctor").isFirstDate ? (
                      <span>Available</span>
                    ) : (
                      <span> &nbsp;</span>
                    )}
                  </div>
                </Item>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            columns={{ xs: 4, sm: 4, md: 4 }}
            className="columnMain"
          >
            <Item
              sx={{ width: "100%" }}
              xs={{ width: "100%" }}
              sm={{ width: "100%" }}
              md={{ width: "100%" }}
              header="true"
            >
              Assistant
            </Item>
          </Grid>

          <Grid container columns={{ xs: 12, sm: 12, md: 12 }}>
            {times.map((dateTime, index) => (
              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                key={index}
                className="columnMain"
              >
                <Item
                  key={index}
                  header={setAvailability(
                    dateTime,
                    "Assistant"
                  ).isAvailability.toString()}
                >
                  <div>
                    {setAvailability(dateTime, "Assistant").isFirstDate ? (
                      <span>Available</span>
                    ) : (
                      <span> &nbsp;</span>
                    )}
                  </div>
                </Item>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            columns={{ xs: 4, sm: 4, md: 4 }}
            className="columnMain"
          >
            <Item
              sx={{ width: "100%" }}
              xs={{ width: "100%" }}
              sm={{ width: "100%" }}
              md={{ width: "100%" }}
              header="true"
            >
              Hygienist
            </Item>
          </Grid>
          <Grid container columns={{ xs: 12, sm: 12, md: 12 }}>
            {times.map((dateTime, index) => (
              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                key={index}
                className="columnMain"
              >
                <Item
                  key={index}
                  header={setAvailability(
                    dateTime,
                    "Hygienist"
                  ).isAvailability.toString()}
                >
                  <div>
                    {setAvailability(dateTime, "Hygienist").isFirstDate ? (
                      <span>Available</span>
                    ) : (
                      <span> &nbsp;</span>
                    )}
                  </div>
                </Item>
              </Grid>
            ))}
          </Grid>
        </Box>
      </div>
    </div>
  );
};

export default Calender;
