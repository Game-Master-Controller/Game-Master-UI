import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Link, Route, Switch, Redirect } from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { load, save } from 'redux-localstorage-simple';
import reduxLogger from 'redux-logger';
import thunk from 'redux-thunk';
import './App.css';
import rootReducer from './reducers/rootReducer';
import Home from './pages/home';
import Step1 from './pages/pipeline/step1';
import Step2 from './pages/pipeline/step2';
import theme from './Theme';
import { ThemeProvider } from '@material-ui/core';

const middleware = [reduxLogger, thunk];

const store = createStore(rootReducer, load(), composeWithDevTools(applyMiddleware(...middleware, save())));

console.log(store.getState())
const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Router>
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/step1" component={Step1} />
            <Route exact path="/step2" component={Step2} />
            <Route path="/*"><Redirect to="/home"/></Route>
          </Switch>
      </Router>
    </ThemeProvider>
  </Provider>
);

export default App;
