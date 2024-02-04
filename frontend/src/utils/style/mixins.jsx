export default mixins

const mixins = {
   rowSpaceBetween: () => css`
      display: flex;
      flex-direction: row;
      justify-content: space-between;
   `,
   column: () => css`
      display: flex;
      flex-direction: column;
   `,
   row: () => css`
      display: flex;
      flex-direction: row;
   `,
}
