import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const StyledAppContainer = styled.div`
    background-color: ${(props) => (props.darkTheme ? "#092532" : "#c9f1ff")};
    min-height: 100vh;
    transition: all 0.3s ease-in-out;
    .main {
        min-height: calc(100vh - 70px);
        display: flex;
    }
`;

export const GlobalStyles = createGlobalStyle`
html {
  box-sizing: border-box;
}
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
}
*,
*::before,
*::after {
  box-sizing: inherit;
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
}
img {
  display: block;
  max-width: 100%;
  height: auto;
}
ul {
  list-style: none;
}

h2{
    color: ${(props) => (props.darkTheme ? "#f0f0f0" : "#333333")};
    font-size: 30px;
    margin-bottom: 30px;
    transition: all 0.3s ease-in-out;
}

input, textarea{
    background-color:${(props) =>
        props.darkTheme ? "#393e46" : "#fff"}!important;
    border: ${(props) =>
        props.darkTheme ? "1px solid #4e6f6a" : "1px solid #ced4da"}!important;
    color: ${(props) => (props.darkTheme ? "#f0f0f0" : "#333333")}!important;
}
input::placeholder, textarea::placeholder{
    background-color:${(props) =>
        props.darkTheme ? "#393e46" : "#fff"}!important;
    color: ${(props) => (props.darkTheme ? "#f0f0f0" : "#aaa")}!important;
}
`;
