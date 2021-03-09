import { combineReducers } from "redux"
import AuthReducer from "./Auth/reducer"
import EventsReducer from "./Events/reducer"
const rootReducer = {
	AuthReducer,
	EventsReducer,
}

export default combineReducers(rootReducer)
