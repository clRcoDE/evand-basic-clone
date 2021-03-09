import { useRouter } from "next/router"

import { useSelector } from "react-redux"
import { InfoBox } from "../../InfoBox/InfoBox"
import { Row } from "../Basic"
import styles from "./Navbar.module.scss"
const Navbar = (props) => {
	const storeState = useSelector((state) => state)
	const { token, profile } = storeState.AuthReducer
	const router = useRouter()
	const loginTrigger = () => {
		router.push({ pathname: "/login" })
	}
	return (
		<div className={styles.navbarContainer}>
			{token && (
				<Row>
					<InfoBox>{profile?.name}</InfoBox>
				</Row>
			)}
			{!token && (
				<Row>
					<InfoBox extrastyles={{ "margin-right": "20px" }}>
						کاربر مهمان
					</InfoBox>
					<InfoBox border={true} onClick={loginTrigger}>
						ورود
					</InfoBox>
				</Row>
			)}
		</div>
	)
}

export default Navbar
