import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const StyledAppContainer = styled.div`
    background-color: #e4f9ff;
    min-height: 100vh;

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
`;
