import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const StyledAppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    padding: 40px 60px;
    background-color: #eee;

    .form {
        width: 400px;
        padding: 40px 30px;
        display: flex;
        flex-direction: column;
        align-items: center;

        background-color: #fff;
        border: 2px solid #333;
        border-radius: 10px;

        & #firstName,
        #lastName,
        #email {
            height: 28px;
            border: 1px solid #333;
            border-radius: 10px;
            font-size: 16px;
        }
        & select {
            width: 120px;
            height: 30px;
            font-size: 16px;
            margin-left: 40px;
        }
        & input[type="radio"],
        input[type="checkbox"] {
            width: 18px;
            height: 18px;
            margin: 4px;
        }

        & .textInput-label {
            width: 100%;
            display: flex;
            flex-direction: column;
            margin-bottom: 24px;
        }
        & .formInput-label {
            width: 100%;
            margin-bottom: 24px;
        }
        & .submit {
            width: 140px;
            height: 38px;
            border: 1px solid #333;
            border-radius: 10px;
            font-size: 18px;
            cursor: pointer;
        }
    }
    div.formInput-label {
        display: flex;
        justify-content: space-between;
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

ul {
  list-style: none;
}
.please{
    color: tomato;
}

`;
