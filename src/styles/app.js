import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const StyledAppContainer = styled.div`
    min-height: 100vh;
    min-width: 100vw;
    padding: 40px 40px;
    background-color: #eee;
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

ul {
  list-style: none;
}

.userDetailsContainer{
    display: flex;
}
.userDetailsHeading{
    margin-bottom: 24px
}
.userDetailsDetails{
    margin-right: 60px;
}
.userDetailsPhoto{
    width: 267px;
    height: 200px;
}

`;
