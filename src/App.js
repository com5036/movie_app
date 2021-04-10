import React from "react";
import { HashRouter, Route } from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";
import Navigation from "./components/Navigation";
import Detail from "./routes/Detail";

function App() {
  return (
    <HashRouter>
      <Navigation></Navigation>
      <Route path="/" exact={true} component={Home}></Route>
      <Route path="/about" exact={true} component={About}></Route>
      <Route path="/movie-detail" exact={true} component={Detail}></Route>
    </HashRouter>
  );
}

export default App;
