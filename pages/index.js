import Head from "next/head"
import Link from "next/link"
import { authenticate, loadingswitch } from "../redux/Auth/actions"
import { useSelector, useDispatch } from "react-redux"
import { CustomeButton } from "../components/Button/Button"
import { CustomTextInput } from "../components/Input/Input"
export default function Home() {
	const dispatch = useDispatch()
	const authState = useSelector((state) => state.AuthReducer)
	console.log(authState.auth_loading)
	const switchloader = () => {
		dispatch(loadingswitch())
	}
	return (
		<div>
			<h1>hello its me {`${authState.auth_loading}`}</h1>
			<CustomeButton onClick={switchloader}>{"سویچ"}</CustomeButton>
			<CustomeButton
				extrastyles={{ "font-family": "Lobster" }}
				onClick={switchloader}
			>
				SWITCH!
			</CustomeButton>
			<CustomTextInput
				id="outlined-basic"
				label="Outlined"
				variant="outlined"
			/>
		</div>
	)
}
