import styles from "./EventItem.module.scss"
import {
	ImageWrapper,
	Image,
	MidTitle,
	Column,
	TagTitle,
} from "../../Layout/Basic"
import { useRouter } from "next/router"
import { firstNChar } from "../../../utils/modules/firstNChar"
const EventItem = (props) => {
	const router = useRouter()
	const redirectEvent = () => {
		const url = "/EventDetails"
		router.push({ pathname: url, query: { index: props.index } })
	}
	return (
		<button className={styles.eventItemContainer} onClick={redirectEvent}>
			{props.itemLogo ? (
				<ImageWrapper width={"280px"} height={"150px"}>
					<Image src={props.itemLogo} />
				</ImageWrapper>
			) : (
				<ImageWrapper width={"280px"} height={"150px"}>
					<Image src={"/images/placeholder.webp"} />
				</ImageWrapper>
			)}
			<Column
				justify={"flex-start"}
				align={"flex-end"}
				extrastyles={{ padding: "12px" }}
			>
				<MidTitle>{props.itemTitle}</MidTitle>
				<TagTitle color={"description"}>{props.itemOrg}</TagTitle>
				<TagTitle color={"light"}>
					{"تاریخ برگزاری : "}
					{firstNChar(props.itemStartDate, 10)}
				</TagTitle>
			</Column>
		</button>
	)
}

export default EventItem
