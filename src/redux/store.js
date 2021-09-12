import { createStore, applyMiddleware, combineReducers } from "redux";
import { createLogger } from "redux-logger";
import rpm from "redux-promise-middleware";
import authReducer from "./reducer/auth";
import classesReducer from "./reducer/classes";

const reducers = combineReducers({
  auth: authReducer,
  classes: classesReducer,
});
const logger = createLogger();
const enhancers = applyMiddleware(rpm, logger);

const reduxStore = createStore(reducers, enhancers);

export default reduxStore;
