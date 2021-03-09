import styled from "styled-components"
import TextField from "@material-ui/core/TextField"

const StyledTextInput = styled(TextField)`
	&& {
		direction: rtl;
		${(props) => props.extrastyles}
	}
`
export const CustomTextInput = ({ children, ...otherprops }) => {
	return <StyledTextInput {...otherprops}>{children}</StyledTextInput>
}
