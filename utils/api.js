import axios from "axios"
import { BASE_URL } from "../utils/constants"
import Cookies from "universal-cookie"
import { toast } from "react-toastify"
const cookies = new Cookies()

const METHODS = ["get", "post", "put", "patch", "delete"]

class ApiRequest {
	constructor() {
		METHODS.forEach(
			(method) => (this[method] = this.createRequest.bind(this, method))
		)
	}

	createRequest(method, api, options = {}) {
		options.method = method
		return this.request(api, options).then(this.handleStatus)
	}

	request(api, { data = null, ...options } = {}) {
		const reqOptions = options
		reqOptions.headers = reqOptions?.headers || {}
		reqOptions.headers["Accept"] = "application/json"
		reqOptions.headers["token"] = `${cookies.get("user")}`
		reqOptions.headers["Access-Control-Allow-Origin"] = "*"
		reqOptions.headers["Access-Control-Allow-Methods"] =
			"DELETE, POST, GET, OPTIONS"
		reqOptions.headers["Access-Control-Allow-Headers"] =
			"Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"

		reqOptions.headers["Content-Type"] = "text/event-stream"
		reqOptions.headers["Cache-Control"] = "no-cache"
		reqOptions.headers["Connection"] = "keep-alive"
		reqOptions.headers["X-Accel-Buffering"] = "no"

		const AXIOS = axios.create({
			baseURL: BASE_URL,
			headers: reqOptions.headers,
			validateStatus: () => true,
		})
		console.log(`\x1b[32m${api}\x1b[0m`)
		return AXIOS[options.method](BASE_URL + api, data)
	}

	handleStatus(response) {
		if (response?.status >= 200 && response?.status < 300) {
			if (response?.data?.setting?.success === "2") {
				cookies.remove("user")
				cookies.remove("userInfo")
				return router.push("/login")
			}
			if (response?.data?.setting?.success === "3") {
				toast.error("شما اجازه دسترسی به این سرویس را ندارید")
			}
			return { responseData: response.data }
		}
		return Promise.reject(response)
	}
}

export default new ApiRequest()
