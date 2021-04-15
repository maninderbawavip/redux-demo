import { createStore } from "redux";
import { UserReducer } from "./reducers/UserReducer";

// pass reducers
export const store = createStore(UserReducer)