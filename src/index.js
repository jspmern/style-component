import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider ,createGlobalStyle} from "styled-components";

const root = ReactDOM.createRoot(document.getElementById("root"));
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

// 👉  even we can access theme inside globalStyle
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
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
         <App />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
