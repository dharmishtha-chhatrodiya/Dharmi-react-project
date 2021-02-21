import logo from './logo.svg';
import CategoryList from './Components/ProductCategory/CategoryList';
import { Grid } from '@material-ui/core';
import ListInput from "./Components/ProductCategory/listAdder"
import ListOutput from './Components/ProductCategory/ListDisplay';

function App() {
  return (
    <div className="App">
      <ListInput />
      <ListOutput />
    </div>
  );
}

export default App;
