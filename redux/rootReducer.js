import { combineReducers } from "redux"
import AuthReducer from "./Auth/reducer"

const rootReducer = {
	AuthReducer,
}

export default combineReducers(rootReducer)
