import styled from "styled-components"

const InfoBox = styled.button`
	background-color: ${({ theme }) => theme.colors.mediumaquamarine};
	border-radius: 10px;
	border: 3px solid
		${(props) => (props.border ? props.theme.colors.jet : "transparent")};
	padding: 10px 15px;
	font-family: Lalezar;
	&:hover {
		background-color: ${({ theme }) => theme.colors.royalbluedark};
		color: ${({ theme }) => theme.colors.mediumaquamarine};
		border: 3px solid ${({ theme }) => theme.colors.royalbluedark};
	}
	&:focus {
		outline: none;
		border: 3px solid ${({ theme }) => theme.colors.foreground};
	}
	${(props) => props.extrastyles};
`
export { InfoBox }
