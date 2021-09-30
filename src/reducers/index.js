import counterReducer from "./counter"; 
import loggedReducer from "./isLogged";
import movieReducer from "./movieReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    movie: movieReducer,
    counter: counterReducer,
    islogged: loggedReducer,
})

export default allReducers;