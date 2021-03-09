import { events_types } from "../types"
import ApiRequest from "../../utils/api"

const getEventsRequest = () => ({ type: events_types.GET_EVENTS_REQUEST })

const getEventsSuccess = (result) => ({
	type: events_types.GET_EVENTS_SUCCESS,
	payload: result,
})
const getEventsFailure = (error) => ({
	type: events_types.GET_EVENTS_FAILED,
	payload: error,
})

export const getEvents = (successCallback, failureCallback) => {
	return async (dispatch, getState) => {
		try {
			dispatch(getEventsRequest())
			const url = "/events"
			ApiRequest.get(url)
				.then(({ responseData }) => {
					dispatch(getEventsSuccess(responseData.data))
					successCallback && successCallback(responseData.data)
				})
				.catch(({ responseData }) => {
					responseData && dispatch(getEventsFailure(responseData.error))
					failureCallback && failureCallback(responseData.error)
				})
		} catch (error) {
			dispatch(getEventsFailure(error))
			failureCallback && failureCallback(error)
		}
	}
}
