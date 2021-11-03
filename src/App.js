import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Switch, useLocation, Route } from "react-router-dom";
import Home from "./pages/Home/Home/Home";

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Switch>
          <Route path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
