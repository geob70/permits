import { combineReducers } from "redux";
import permitReducers from "./permitReducers";

const rootReducer = combineReducers({
  posts: permitReducers,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
