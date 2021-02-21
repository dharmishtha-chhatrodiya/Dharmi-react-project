import logo from './logo.svg';
import CategoryList from './Components/ProductCategory/CategoryList';
import { Container } from '@material-ui/core';
import ListInput from "./Components/ProductCategory/listAdder"
import ListOutput from './Components/ProductCategory/ListDisplay';

function App() {
  return (
    <div className="App">
      <Container maxWidth="lg">
      <ListInput />
      <ListOutput />
      <CategoryList/>
      </Container>
    </div>
  );
}

export default App;
