import { combineReducers, createStore } from "redux";
import { NotesReducer } from "./reducers/NotesReducer";
import { PostReducer } from "./reducers/PostsReducer";
import { UserReducer } from "./reducers/UserReducer";

// we created a new reducer and we combined both of these reducers

const combinedReducers = combineReducers({
    userInfo: UserReducer,
    postsInfo: PostReducer,
    notes: NotesReducer
})

// pass reducers
export const store = createStore(combinedReducers)