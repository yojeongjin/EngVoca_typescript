import { combineReducers } from "redux";
import auth from "./auth"
import save from "./save"
import day from "./day"

//redux-persist
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: 'root',
  storage
}

const reducer = combineReducers({
  auth,
  save,
  day
})

export default persistReducer(persistConfig, reducer)