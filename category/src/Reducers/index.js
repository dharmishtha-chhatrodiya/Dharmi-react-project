import listReducer from "./list";
import { combineReducers } from "redux";
import categoryReducer from "./categoryReducer";

const rootReducers = combineReducers({
  list: listReducer,
  category: categoryReducer,
});

export default rootReducers;
