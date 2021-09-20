import logo from './logo.svg';
import './App.css';
// import { NavigationSidebar, TopBar } from "./components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Home from "./components/pages/Home";
// import Friends from "./components/pages/Friends";
// import Groups from "./components/pages/Groups";
// import Events from "./components/pages/Events";
import {TopBar, NavigationSidebar, Home, Friends, Groups, Favorites, Events } from "./index.js";

function App() {
  return (
    <div className="App">
      <TopBar />
      <Switch>
        <Route exact path="/pages/Home">
          <Home />
        </Route>
        <Route exact path="/pages/Friends">
          <Friends />
        </Route>
        <Route exact path="/pages/Groups">
          <Groups />
        </Route>
        <Route exact path="/pages/Events">
          <Events />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
