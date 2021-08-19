import { HashRouter as Router, Route, Switch } from "react-router-dom";
import ThemeProvider from "./context/themeContext";
import TodosProvider from "./context/todosContext";
import UserProvider from "./context/userContext";
import MyNotes from "./pages/MyNotes";
import WelcomePage from "./pages/WelcomePage";

function App() {
  return (
    <div>
      <UserProvider>
        <ThemeProvider>
          <TodosProvider>
            <Router>
              <Switch>
                <Route exact path="/" component={WelcomePage} />
                <Route exact path="/my-todo" component={MyNotes} />
              </Switch>
            </Router>
          </TodosProvider>
        </ThemeProvider>
      </UserProvider>
    </div>
  );
}

export default App;
