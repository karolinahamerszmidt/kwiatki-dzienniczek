import React from "react";
import "./App.css";
import { Podlewanie } from "./components/Podlewanie";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Switch>
            <Route path="/podlewanie">
              <img
                src={`${process.env.PUBLIC_URL}/flower.png`}
                className="App-logo"
                alt="logo"
              />
            </Route>

            <Route path="*">
              <div className="logo">
                <img
                  src={`${process.env.PUBLIC_URL}/flower.png`}
                  className="App-logo"
                  alt="logo"
                />
              </div>
            </Route>
          </Switch>

          <div className="tytul">Dzienniczek</div>
          <div>
            <div className="nawigacja">
              <Link to="/">Strona Glowna</Link>
              <Link to="/podlewanie">Podlewanie</Link>
            </div>

            <Switch>
              <Route path="/podlewanie">
                <Podlewanie />
              </Route>
            </Switch>
          </div>
        </Router>
      </header>
    </div>
  );
}

export default App;
