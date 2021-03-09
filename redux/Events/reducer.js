import { events_types } from "../types"

const initialState = {
	events: [],
	event_loading: false,
	event_error: null,
}

const EventsReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case events_types.GET_EVENTS_REQUEST:
			return {
				...state,
				event_loading: true,
			}
		case events_types.GET_EVENTS_SUCCESS:
			return {
				...state,
				event_loading: false,
				events: [...payload],
			}
		case events_types.GET_EVENTS_FAILED:
			return {
				...state,
				event_loading: false,
				event_error: payload.error,
			}
		default:
			return state
	}
}

export default EventsReducer
