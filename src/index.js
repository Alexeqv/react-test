import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { Provider } from 'react-redux';
import "assets/css/nucleo-icons.css";
import "assets/scss/blk-design-system-react.scss?v=1.2.0";
import store from './store';

import Index from "views/Index.js";
import "./i18nextConf";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/components" render={(props) => <Index {...props} />} />
        <Redirect from="/" to="/components" />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
