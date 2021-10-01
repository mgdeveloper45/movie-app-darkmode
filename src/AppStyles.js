import styled from "styled-components";

export const Home = styled.div`
  min-height: 100vh;
  background-color: ${(props) =>
    props.theme === true ? "rgb(0, 53, 102)" : "rgb(204, 230, 255)"};
`;
