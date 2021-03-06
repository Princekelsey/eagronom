import { combineReducers } from "redux";
import appReducer from "./app/appReducer";

const rootReducer = combineReducers({
  appState: appReducer,
});

export default rootReducer;
