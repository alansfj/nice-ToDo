import { HashRouter as Router, Route, Switch } from "react-router-dom";
import UserProvider from "./context/userContext";
import MyNotes from "./pages/MyNotes";
import WelcomePage from "./pages/WelcomePage";

function App() {
  return (
    <div>
      <UserProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={WelcomePage} />
            <Route exact path="/my-notes" component={MyNotes} />
          </Switch>
        </Router>
      </UserProvider>
    </div>
  );
}

export default App;
