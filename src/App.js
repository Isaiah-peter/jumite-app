import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from "./pages/registerpages";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/regiser" component={Register} />
      </Switch>
    </Router>
  );
}

export default App;
