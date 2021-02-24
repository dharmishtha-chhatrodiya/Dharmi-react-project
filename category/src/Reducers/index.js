import { combineReducers } from "redux";
import DataReducer from "./DataReducers";

export default combineReducers({
    data: DataReducer,
});
