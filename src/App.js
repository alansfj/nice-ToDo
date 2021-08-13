import { HashRouter as Router, Route, Switch } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={WelcomePage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
