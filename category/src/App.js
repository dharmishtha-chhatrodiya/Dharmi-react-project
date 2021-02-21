import logo from "./logo.svg";
import React, { useState } from "react";
import CategoryList from "./Components/ProductCategory/CategoryList";
import { Grid } from "@material-ui/core";
import ListInput from "./Components/ProductCategory/listAdder";
import ListOutput from "./Components/ProductCategory/ListDisplay";
import { addCategory } from "./Actions/categoryAction";
import { connect } from "react-redux";
import { Container } from '@material-ui/core';
function App(props) {
  console.log("props", props);
  const [category, setcategory] = useState();
// import logo from './logo.svg';
// import CategoryList from './Components/ProductCategory/CategoryList';

// import ListInput from "./Components/ProductCategory/listAdder"
// import ListOutput from './Components/ProductCategory/ListDisplay';

  return (
    <div className="App">
     

      <ListInput />
      <ListOutput />

      <input type="text" onChange={(e) => setcategory(e.target.value)} />
      <button
        type="button"
        onClick={() => {
          props.addCategory(category);
        }}
      >
        Click Me!
      </button>
      <Container maxWidth="lg">
      <ListInput />
      <ListOutput />
      <CategoryList/>
      </Container>
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log("state in Appp::", state);
  return {};
};

export default connect(mapStateToProps, { addCategory })(App);
