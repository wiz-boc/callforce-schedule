import Paper from "@mui/material/Paper";
import { experimentalStyled as styled } from "@mui/material/styles";

let formatTime = (date) => {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  var strTime = hours + ":" + minutes + " " + ampm;
  return strTime;
};

const Item = styled(Paper)(({ theme, header }) => ({
  //backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  backgroundColor: header === "true" ? "#f1af71" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const checkForNullorEmptyString = (value) => {
  let isValid = true;
  if (value === "" || value === null) {
    isValid = false;
  }
  return isValid;
};

const checkForMinDate = (systemDate, userDate) => {
  let isValid = true;
  if (systemDate > userDate.getTime) {
    isValid = false;
  }
  return isValid;
};

const checkForMaxDate = (systemDate, userDate) => {
  let isValid = true;
  if (systemDate < userDate) {
    isValid = false;
  }
  return isValid;
};

export {
  formatTime,
  Item,
  checkForNullorEmptyString,
  checkForMinDate,
  checkForMaxDate,
};
