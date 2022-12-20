import { combineReducers } from "redux";
import auth from "./auth"
import save from "./save"
import test from "./test"

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
  test
})

export default persistReducer(persistConfig, reducer)