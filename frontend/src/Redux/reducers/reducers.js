import { combineReducers } from "redux";
import users from "./components/users";
import petCounter from "./components/petCounter";
import petFavorite from "./components/petFavorite";


const reducers = combineReducers({
    users,
    petCounter,
    petFavorite,
});

export default reducers;