import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Switch, useLocation, Route } from "react-router-dom";
import Home from "./pages/Home/Home/Home";
import AvailableAppointment from "./pages/Appointment/AvailableAppointment/AvailableAppointment";
import Appointment from "./pages/Appointment/Appointment/Appointment";

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route path="/appointment">
            <Appointment></Appointment>
          </Route>
          <Route path="/availableAppointment">
            <AvailableAppointment></AvailableAppointment>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
