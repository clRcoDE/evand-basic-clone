import styled from "styled-components"

const Center = styled.div`
	display: flex;
	flex-direction: ${(props) => props.direction || "column"};
	align-items: center;
	justify-content: center;
	${(props) => props.extrastyles};
`

const Row = styled.div`
	display: flex;
	flex-direction: row;
	align-items: ${(props) => props.align};
	justify-content: ${(props) => props.justify};
	${(props) => props.extrastyles};
`
const Column = styled.div`
	display: flex;
	flex-direction: column;
	align-items: ${(props) => props.align};
	justify-content: ${(props) => props.justify};
	${(props) => props.extrastyles};
`
const ImageWrapper = styled.div`
	display: flex;
	flex-direction: ${(props) => props.dir || "column"};
	align-items: center;
	justify-content: center;
	width: ${(props) => props.width};
	height: ${(props) => props.height};
	object-fit: cover;
`

const Image = styled.img`
	width: 100%;
	height: 100%;
`

const BigTitle = styled.h1`
	font-family: Lalezar;
	text-align: right;
	font-weight: 800;
	direction: rtl;
	color: ${(props) =>
		props.color === "light"
			? props.theme.colors.highlight
			: props.color === "description"
			? props.theme.colors.descripy
			: props.theme.colors.jet};
`
const MidTitle = styled.h3`
	font-family: Lalezar;
	text-align: right;
	font-weight: 800;
	direction: rtl;

	color: ${(props) =>
		props.color === "light"
			? props.theme.colors.highlight
			: props.color === "description"
			? props.theme.colors.descripy
			: props.color || props.theme.colors.jet};
`
const TagTitle = styled.h5`
	font-family: Lalezar;
	text-align: right;
	font-weight: 800;
	direction: rtl;

	color: ${(props) =>
		props.color === "light"
			? props.theme.colors.highlight
			: props.color === "description"
			? props.theme.colors.descripy
			: props.theme.colors.jet};
`

export {
	Center,
	Column,
	Row,
	ImageWrapper,
	Image,
	BigTitle,
	MidTitle,
	TagTitle,
}
