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
			const { token } = getState()
			const data = {
				token,
			}
			const url = "/login"
			Api.get(url, data)
				.then((result) => {
					dispatch(getEventsSuccess(result))
					successCallback && successCallback(result)
				})
				.catch((error) => {
					dispatch(getEventsFailure(error))
					failureCallback && failureCallback(error)
				})
		} catch (error) {
			dispatch(authenticationFailure(error))
			failureCallback && failureCallback(error)
		}
	}
}
