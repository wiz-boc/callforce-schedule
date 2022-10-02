import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import AddAvailability from "./components/AddAvailability";
import { useState } from "react";

function App() {
  const [openAddAvailablityModel, setAddAvailablityModal] = useState(false);
  return (
    <div>
      <AddAvailability
        open={openAddAvailablityModel}
        onClose={() => setAddAvailablityModal(false)}
      />

      <div className="container">
        <div className="app-wrapper">
          <div>
            <Header />
          </div>
          <Form onOpen={() => setAddAvailablityModal(true)} />
        </div>
      </div>
    </div>
  );
}

export default App;
