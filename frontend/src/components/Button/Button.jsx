import styled from "styled-components"
import colors from "../../utils/style/colors"

export default Button

function Button({ content, width, height, event }) {
   const Button = styled.button`
      width: ${width};
      height: ${height};
      background-color: ${colors.details_bg};
      color: ${colors.bg_primary};
      padding: 8px;
      font-size: 1.1rem;
      font-weight: bold;
      margin-top: 1rem;
      &:hover {
         cursor: pointer;
      }
   `
   return <Button event={event}>{content}</Button>
}
