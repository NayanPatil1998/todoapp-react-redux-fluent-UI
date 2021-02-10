import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/header";
import Home from "./Components/Home/Home";
import  AddToDo  from "./Pages/addToDo";

function App() {
  return (
    <Router>
      <div className="App ">
        <Switch>
          <Route path="/add">
            <AddToDo />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
