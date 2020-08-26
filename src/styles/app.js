import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const StyledAppContainer = styled.div`
padding: 40px 60px;
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

`;
