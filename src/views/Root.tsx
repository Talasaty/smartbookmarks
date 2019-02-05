import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home } from "./Home";
import { Login } from "./Login";

const Notes = () => <h2>Notes</h2>;
const Pass = () => <h2>Pass</h2>;

const Root = () => (
  <Router>
    <div>
      <Route path="/" exact component={Login} />
      <Route path="/home/" component={Home} />
      <Route path="/notes/" component={Notes} />
      <Route path="/pass/" component={Pass} />
    </div>
  </Router>
);

export default Root;