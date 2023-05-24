import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from "./components/header/Header";
import Navigation from "./components/navigation/Navigation";

function App() {
  return (
      <Router>
        <Header />
        <Navigation />
        <Switch>
          <Route path="/skills">
            {/* skills */}
          </Route>
          <Route path="/experience">
            {/* exp */}
          </Route>
          {/* other */}
        </Switch>
      </Router>
  );
}

export default App;
