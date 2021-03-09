import { useRouter } from "next/router"
import { useDispatch } from "react-redux"
import { useState } from "react"
import { BigTitle } from "../components/Layout/Basic"
import { CustomTextInput } from "../components/Input/Input"
import { InfoBox } from "../components/InfoBox/InfoBox"
import { authenticate } from "../redux/Auth/actions"
const Login = (props) => {
	const [getPassword, setPassword] = useState("")
	const [getEmail, setEmail] = useState("")
	const dispatch = useDispatch()
	const router = useRouter()
	const inputcustomstyles = {
		fontFamily: "Lalezar",
	}
	const authenticateSuccessful = () => {
		router.push("/")
		// or prevoius route
	}

	const authenticateFailed = (error) => {
		console.log(error)
	}
	const authenticateUser = () => {
		dispatch(
			authenticate(
				getEmail,
				getPassword,
				authenticateSuccessful,
				authenticateFailed
			)
		)
	}

	return (
		<div className={"wrapper"}>
			<div className={"loginWrapper"}>
				<div className={"loginBox"}>
					<div className="descriptionWrapper">
						<BigTitle>{"وارد شوید"}</BigTitle>
					</div>
					<div className="loginFormWrapper" dir="rtl">
						<CustomTextInput
							id="email"
							label="ایمیل"
							variant="outlined"
							InputLabelProps={{
								style: { ...inputcustomstyles },
							}}
							type={"email"}
							value={getEmail}
							onChange={(e) => setEmail(e.target.value)}
							extrastyles={{ margin: "10px 0 20px 0" }}
						/>
						<CustomTextInput
							id="password"
							label="رمزعبور "
							variant="outlined"
							type={"password"}
							value={getPassword}
							onChange={(e) => setPassword(e.target.value)}
							InputLabelProps={{
								style: { ...inputcustomstyles },
							}}
							extrastyles={{ margin: "10px 0 20px 0" }}
						/>
					</div>
					<div className="loginSubmitWrapper">
						<InfoBox
							extrastyles={{ width: "200px", "border-radius": "50px" }}
							onClick={authenticateUser}
						>
							{"ورود"}
						</InfoBox>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Login
