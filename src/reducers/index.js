import movieReducer from "./movieReducer";
import searchReducer from "./searchReducer";
import themeReducer from "./themeReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    theme: themeReducer,
    search: searchReducer,
    movie: movieReducer,
})

export default allReducers;