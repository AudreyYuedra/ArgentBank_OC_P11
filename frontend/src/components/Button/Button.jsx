import styled from "styled-components"
import colors from "../../utils/style/colors"

export default Button

function Button({ content, width, height, event }) {
   const Button = styled.button`
      width: ${width};
      height: ${height};
      background-color: ${colors.details_bg};
   `
   return <Button event={event}>{content}</Button>
}
