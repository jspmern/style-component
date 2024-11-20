import styled from "styled-components";
import "./App.css";

///normal style components
// let StyledButton=styled.button`
// color:white;
// background-color:blue;
// border:1px solid black;
// padding: 4px 8px;
// text-align: center;
// `

//Using props
let StyledButton = styled.button`
  color: ${(props) => {
    return props.variant === "outlined" ? "blue" : "white";
  }};
  background-color: ${(props) => {
    return props.variant === "outlined" ? "white" : "blue";
  }};
  border: 1px solid black;
  padding: 4px 8px;
  text-align: center;
`;

//extending styles and pesudo classes
const StyleFancyButton = styled(StyledButton)`
  background-color: red;
  font-size: 18px;
  border-radius: 12px;
  &:hover {
    background-color: white;
    color: red;
  }
  &::before {
    content: "😂";
  }
`;

//adding attributes  (here problem is every time we have to set the attributes separately so, overcome this problem we are going to set some attributes )
let AnchorTag = styled.a.attrs((props) => ({
  href: props.href ? props.href : "#",
  target: "_blank",
}))`
  color: red;
`;

// // //example of theme
let ThemeBox = styled.div`
  border: 1px solid black;
  height: 155px;
  width: 155px;
  //theme is define in index.js
  background-color: ${({ theme }) => theme.dark.primary};
`;

function App() {
  return (
    <div>
      <StyledButton>Button</StyledButton>
      <br />
      <StyledButton variant="outlined">Button</StyledButton>
      <br />
      <StyleFancyButton> modify button</StyleFancyButton>
      <br />
      <AnchorTag>go to google</AnchorTag>
      <br />
      <AnchorTag href="www.linkedin.com">linkedin</AnchorTag>
      <br />
      // // //example of theme
      <ThemeBox />
    </div>
  );
}

export default App;
