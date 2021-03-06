import { combineReducers } from "redux"
import AuthReducer from "./Auth/reducer"

const rootReducer = {
	auth: AuthReducer,
}

export default combineReducers(rootReducer)
