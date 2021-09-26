import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from "./pages/registerpages/Register";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/regiser">
          <Register />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;