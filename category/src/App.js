import logo from './logo.svg';
import './App.css';
import CategoryList from './Components/ProductCategory/CategoryList';
import { Grid } from '@material-ui/core';
import ListInput from "./Components/ProductCategory/listAdder"
import ListOutput from './Components/ProductCategory/ListDisplay';

function App() {
  return (
    <div className="App">
      <Grid container spacing={3}>
        <Grid item sm={6} lg={4}>
        <ListInput />
        </Grid>
        
      </Grid>
      <div>
        <ListOutput />
      </div>
      
    </div>
  );
}

export default App;
