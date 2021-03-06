import Head from "next/head"
import Link from "next/link"
import { authenticate, loadingswitch } from "../redux/Auth/actions"
import { useSelector, useDispatch } from "react-redux"

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
			<button onClick={switchloader}>SWITCH!</button>
		</div>
	)
}
