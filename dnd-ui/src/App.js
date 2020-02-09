import React, { useState } from "react";
import { Provider } from "react-redux";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { sessionService } from "redux-react-session";
import "./App.css";
import Home from "./pages/home";
import Find from "./pages/find";
import theme from "./theme";
import { ThemeProvider } from "@material-ui/core";
import reducers from "./reducers";

const App = () => {
  const [store] = useState(createStore(reducers, applyMiddleware(thunk)));
  sessionService.initSessionService(store);
  store.subscribe(() => {
    console.log("store.getState()", store.getState());
  });
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/find" component={Find} />
            <Route path="/*">
              <Redirect to="/find" />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </Provider>
  );
};
export default App;
