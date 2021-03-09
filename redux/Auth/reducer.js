import { auth_types } from "../types"

const initialState = {
	token: null,
	auth_loading: false,
	profile: null,
	auth_error: null,
	showLogin: false,
}

const AuthReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case auth_types.AUTH_REQUEST:
			return {
				...state,
				auth_loading: true,
			}
		case auth_types.AUTH_SUCCESS:
			return {
				...state,
				auth_loading: false,
				token: payload.token,
				profile: payload.profile,
			}
		case auth_types.AUTH_FAILED:
			return {
				...state,
				auth_loading: false,
				auth_error: payload.error,
			}
		default:
			return state
	}
}

export default AuthReducer
