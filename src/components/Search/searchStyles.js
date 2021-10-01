import styled from "styled-components";

export const FormContainer = styled.div` 
    display:flex; 
    justify-content: space-evenly;
    align-items: center;
    height: 20vh;
    background-color: ${props => props.theme === true 
    ? "rgb(0, 26, 51)" : "rgb(102, 181, 255)"} 
`;

export const Button = styled.button`
    border: none;
    border-radius: 25px;
    font-size: 18px;
    height: 40px;
    padding: 5px;
    width: 80px;
    background-color: rgb(204, 230, 255);
    box-shadow: ${props => props.theme === true 
    ? "3px 3px 12px 0 rgba(0, 66, 128, .9)"
    : "3px 3px 12px 0 rgba(51, 156, 255, .9)"};
`;

export const SearchButton = styled.button`
    border: none;
    border-radius: 25px;
    font-size: 18px;
    height: 40px;
    width: 80px;
    padding: 5px;
    margin-left: 10px;
    background-color: rgb(204, 230, 255);
    box-shadow: ${props => props.theme === true 
    ? "3px 3px 12px 0 rgba(0, 66, 128, .9)"
    : "3px 3px 12px 0 rgba(51, 156, 255, .9)"};
`;

export const Form = styled.form`

`;

export const Input = styled.input`
    border: none;
    border-radius: 25px;
    font-size: 20px;
    text-align: center;
    height: 40px;
    width: 400px;
    background-color: rgb(204, 230, 255);
    box-shadow: ${props => props.theme === true 
    ? "3px 3px 12px 0 rgba(0, 66, 128, .9)"
    : "3px 3px 12px 0 rgba(51, 156, 255, .9)"};
`;