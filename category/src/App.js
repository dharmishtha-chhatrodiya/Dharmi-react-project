import logo from "./logo.svg";
import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import { Provider } from "react-redux";
import store from './store'

import { Container } from '@material-ui/core';
function App(props) {
  console.log("props", props);
  const [category, setcategory] = useState();


  return (
    <Provider store={store}>
      <Container maxWidth="lg">
        <h1>Demo</h1>
      </Container>
    </Provider>
  );
}

const mapStateToProps = (state) => {
  console.log("state in Appp::", state);
  return {};
};

export default (App);
