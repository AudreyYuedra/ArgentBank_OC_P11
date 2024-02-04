import styled from "styled-components"
import colors from "../../utils/style/colors"

export default Field

const FieldContent = styled.div`
   width: 235px;
   height: 60px;
`
const Label = styled.label`
   font-weight: bold;
`
const Input = styled.input`
    width: 100%;
    height: 40px:
    border: solid 1px ${colors.details_line};
`

function Field({ label, type, content }) {
   return (
      <FieldContent>
         <Label for={content}>{label}</Label>
         <Input type={type} id={content} name={content} required></Input>
      </FieldContent>
   )
}
