import React from "react";
import "./App.css";
import { Nav } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import  Characters  from "./components/characters/Characters";
import Potions from "./components/potions/Potions";
import Spells from "./components/spells/Spells";
import Home from "./components/home/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav
          activeKey={window.location.pathname}
          onSelect={(selectedKey) => console.log({ selectedKey })}
          variant="tabs"
          justify
        >
          <Nav.Item>
            <Nav.Link eventKey="/home">
              <Link to="/home">Home</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="potions">
              <Link to="/potions">Potions</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="characters">
              <Link to="/characters">Characters</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="Spells">
            <Link to="/spells">Spells</Link>
            </Nav.Link>
          </Nav.Item>
        </Nav>

        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/characters">
            <Characters />
          </Route>
          <Route path="/potions">
            <Potions />
          </Route>
          <Route path="/spells">
            <Spells />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
