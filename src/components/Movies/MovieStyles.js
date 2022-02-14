import styled from "styled-components";

export const MovieContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const Key = styled.div`
  opacity: 0.75;
  flex-direction: column;
  margin-top: 20px;
  border: 3px solid #b3daff;
  box-shadow: ${props => props.theme === true
  ? "3px 3px 3px 0 rgba(0, 66, 128, .9)"
  : "3px 3px 3px 0 rgba(102, 181, 255, 0.9)"};
`;
export const Title = styled.h3`
  margin-left: 5px;
  font-size: 15px;
  color: ${props => props.theme === true
  ? "rgb(204, 230, 255)"
  : "rgb(0, 66, 128)"}; 
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Img = styled.img``;

export const Info = styled.h4`
  color: ${props => props.theme === true
  ? "rgb(204, 230, 255)"
  : "rgb(0, 66, 128)"};
  size: 18px;
`;

export const Content = styled.div`
  padding: 0 5px;
  display: flex;
  justify-content: space-between;
`;
