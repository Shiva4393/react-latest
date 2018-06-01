import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import './App.css';

import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import indexRoutes from '../src/routes/index';

const hist = createBrowserHistory();

const styles = theme => ({
  pageHeader: {
    minHeight: "100vh",
    height: "auto",
    display: "inherit",
    position: "relative",
    margin: "0",
    padding: "0",
    border: "0",
    alignItems: "center",
    "&:before": {
      background: "rgba(56, 63, 157, 1)"
    },
    "&:before,&:after": {
      position: "absolute",
      zIndex: "1",
      width: "100%",
      height: "100%",
      display: "block",
      left: "0",
      top: "0",
      content: '""'
    }
  }
});

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className="App">
        <div className={classes.pageHeader}>
          <Router history={hist}>
            <Switch>
              {indexRoutes.map((prop, key) => {
                if(prop.exact)
                  return <Route exact path={prop.path} component={prop.component} key={key}></Route>
                else
                  return <Route path={prop.path} component={prop.component} key={key}></Route>
              })}
            </Switch>
          </Router>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
