import { combineReducers } from "redux";
import auth from "./auth"

//redux-persist
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: 'root',
  storage
}

const reducer = combineReducers({
  auth
})

export default persistReducer(persistConfig, reducer)