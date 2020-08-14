import styled from "styled-components";

export const StyledCommentsContainer = styled.div`
    width: 33.3%;
    padding: 40px 30px;
    color: ${(props) => (props.darkTheme ? "#f0f0f0" : "#333333")};
    transition: all 0.3s ease-in-out;
    .commentCard {
        margin-bottom: 20px;
    }
`;
