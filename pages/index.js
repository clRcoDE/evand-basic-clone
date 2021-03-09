import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import Navbar from "../components/Layout/Navbar/Navbar"
import EventItem from "../components/Layout/EventItem/EventItem"
import { getEvents } from "../redux/Events/actions"
import { SpinnerInfinity } from "spinners-react"
export default function Home() {
	const dispatch = useDispatch()
	const authState = useSelector((state) => state.AuthReducer)
	const eventState = useSelector((state) => state.EventsReducer)

	const switchloader = () => {
		dispatch(loadingswitch())
	}
	const getEventsSuccessCallback = () => {}

	const getEventsFailureCallback = (error) => {
		console.log(error)
	}
	useEffect(() => {
		dispatch(getEvents(getEventsSuccessCallback, getEventsFailureCallback))
	}, [])

	return (
		<div className="wrapper">
			<div className="mainContainer">
				<Navbar />

				<div className="listWrapper">
					{eventState.event_loading && !eventState.events.length && (
						<div className="spinnerWrapper">
							<SpinnerInfinity
								size={125}
								thickness={75}
								speed={90}
								color="#00c46c"
								secondaryColor="rgb(4, 24, 71)"
							/>
						</div>
					)}
					{eventState.events?.map((item, index) => (
						<EventItem
							key={`${index}_${Math.random}`}
							index={index}
							itemTitle={item?.name}
							itemLogo={item?.cover?.original}
							itemOrg={item?.organization?.name}
							itemStartDate={item?.start_date}
						></EventItem>
					))}
				</div>
			</div>
		</div>
	)
}
