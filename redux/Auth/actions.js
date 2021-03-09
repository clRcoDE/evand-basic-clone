import { auth_types } from "../types"
import ApiRequest from "../../utils/api"

const authenticationRequest = () => ({ type: auth_types.AUTH_REQUEST })

const authenticationSuccess = (result) => ({
	type: auth_types.AUTH_SUCCESS,
	payload: result,
})
const authenticationFailure = (error) => ({
	type: auth_types.AUTH_FAILED,
	payload: error,
})

export const authenticate = (
	username,
	password,
	successCallback,
	failureCallback
) => {
	return async (dispatch, getState) => {
		try {
			dispatch(authenticationRequest())
			const data = {
				email,
				password,
			}
			const url = "/login"
			ApiRequest.post(url, data)
				.then(({ responseData }) => {
					dispatch(authenticationSuccess(responseData.result))
					successCallback && successCallback(responseData.result)
				})
				.catch((error) => {
					dispatch(authenticationFailure(error))
					failureCallback && failureCallback(error)
				})
		} catch (error) {
			dispatch(authenticationFailure(error))
			failureCallback && failureCallback(error)
		}
	}
}

export const showLogin = () => ({
	type: auth_types.SHOW_LOGIN,
})
