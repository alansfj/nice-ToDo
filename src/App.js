import { HashRouter as Router, Route, Switch } from "react-router-dom";
import ThemeProvider from "./context/themeContext";
import UserProvider from "./context/userContext";
import MyNotes from "./pages/MyNotes";
import WelcomePage from "./pages/WelcomePage";

function App() {
  return (
    <div>
      <UserProvider>
        <ThemeProvider>
          <Router>
            <Switch>
              <Route exact path="/" component={WelcomePage} />
              <Route exact path="/my-notes" component={MyNotes} />
            </Switch>
          </Router>
        </ThemeProvider>
      </UserProvider>
    </div>
  );
}

export default App;
