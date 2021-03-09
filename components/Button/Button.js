import styled from "styled-components"
import Button from "@material-ui/core/Button"

const StyledButton = styled(Button)`
	&& {
		background-color: ${({ theme }) => theme.colors.primary};
		height: 80px;
		font-family: Lalezar;
		font-weight: 800;
		${(props) => props.extrastyles}
	}
`
const CustomButton = ({ children, ...otherprops }) => {
	return <StyledButton {...otherprops}>{children}</StyledButton>
}

export { CustomButton }
