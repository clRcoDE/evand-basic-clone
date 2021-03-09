import { useRouter } from "next/router"
import { useSelector } from "react-redux"
import Navbar from "../components/Layout/Navbar/Navbar"
import { firstNChar } from "../utils/modules/firstNChar"

import {
	ImageWrapper,
	Image,
	Row,
	BigTitle,
	Column,
	MidTitle,
} from "../components/Layout/Basic"
const EventDetails = (props) => {
	const router = useRouter()
	const eventState = useSelector((state) => state.EventsReducer)
	const details = eventState?.events[router?.query?.index]
	const eventdate = firstNChar(details?.start_date, 10)

	return (
		<div className="wrapper">
			<Navbar />

			<div className="eventContainer">
				<Column extrastyles={{ margin: "0 0 30px 0" }}>
					{details?.cover?.original ? (
						<ImageWrapper width={"100%"} height={"auto"}>
							<Image src={details?.cover?.original} />
						</ImageWrapper>
					) : (
						<ImageWrapper width={"auto"} height={"auto"}>
							<Image src={"/images/placeholder.webp"} />
						</ImageWrapper>
					)}
				</Column>
				<Column extrastyles={{ padding: "0 50px" }}>
					<Row align={"center"} justify={"flex-end"}>
						<BigTitle>{details?.name}</BigTitle>
					</Row>
					<Row align={"center"} justify={"flex-end"}>
						<MidTitle color={"description"}>
							{"ارائه دهنده رویداد :"}
							{details?.organization?.name}
						</MidTitle>
					</Row>
					<Row align={"center"} justify={"flex-end"}>
						<MidTitle
							color={"description"}
						>{`تاریخ شروع رویداد : ${eventdate}`}</MidTitle>
					</Row>

					{details?.address && (
						<Row align={"center"} justify={"flex-end"}>
							<MidTitle
								color={"light"}
							>{`محل برگزاری رویداد : ${details?.address}`}</MidTitle>
						</Row>
					)}
					{details?.refund_policy && (
						<Row align={"center"} justify={"flex-end"}>
							<MidTitle
								color={"description"}
							>{`شرایط بازگشت بلیت : ${details?.refund_policy}`}</MidTitle>
						</Row>
					)}
				</Column>
			</div>
		</div>
	)
}

export default EventDetails
