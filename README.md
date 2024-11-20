# Getting Started with Style component

-style component is a css-in-js styling solution for react and react-native
-it uses tagged template literal which allow you to write plain css that is scaped to a single component inside your javascript.

## Benefits

-Automatic critial css
-no class name bugs
-easier deletion of css
-dynamic styling (means according to props we can change)
-painless maintenance
-automatic vendor prefixing (it supports all browsers)

👉 vscode-style-components (extensions that give you intelligence support)

### `npm  i styled-components`

### first style component

import styles from 'styled-components'
const StyledButton=styled.button` border:1px solid black;
   color:"white";
`
function app()
{
return <StyleButton> </StyleButton>
}

### using props

let StyledButton = styled.button`  color: ${(props) => {
    return props.variant === "outlined" ? "blue" : "white";
  }};
  background-color: ${(props) => {
    return props.variant === "outlined" ? "white" : "blue";
  }};
  border: 1px solid black;
  padding: 4px 8px;
  text-align: center;`;

function app()
{
return <>
<StyleButton> </StyleButton>
return <StyleButton variant="outlined"> </StyleButton>

    </>

}

### extend and pesudo class and element

👉 Note point in styleFancyButton extends style of StyleButton

const StyleFancyButton = styled(StyledButton)`  background-color: red;
  font-size: 18px;
  border-radius: 12px;
  &:hover {
    background-color: white;
    color: red;
  }
  &::before {
    content: "😂";
  }`;

### Adding attributes

let AnchorTag = styled.a.attrs((props) => ({
href: props.href ? props.href : "#",
target: "\_blank",
}))`  color: red;`;

### Theming

step 1- import { ThemeProvider } from "styled-components";
step 2- crate theme object
let theme = {
dark: {
primary: "red",
text: "blue",
},
light: {
primary: "grey",
text: "black",
},
};
step-3 provide to top level of project
<ThemeProvider theme={theme}>
<App />
</ThemeProvider>

and this all value is available for all components

### Global configuration or Global styles

By using you can reset your application for the project you can change the default style of element
step1 - import { createGlobalStyle} from "styled-components";
step 2- create globalStyle object (it can directly support theme object)
let GlobalStyle=createGlobalStyle({
button:{
textAlign:"start",
fontFamily:"Helvetica",
},
body:{
margin:0,
padding:0,
backgroundColor:theme.light.primary
}
});

step-3 - and add this component to top level of project
<ThemeProvider theme={theme}>
<GlobalStyle/>
<App />
</ThemeProvider>
