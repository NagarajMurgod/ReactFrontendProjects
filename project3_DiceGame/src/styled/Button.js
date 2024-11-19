import styled from "styled-components";

export const Button = styled.button`
    color: white;
    padding: 10px 18px;
    background-color: #000000;
    border-radius: 5px;
    width: 220px;
    border: none;
    font-size: 16px;
    transition: 0.3s all ease-in;
    cursor: pointer;
    /* align-self: flex-end; */
    border: 2px solid black;

    &:hover{
        background-color: white;
        color: black;
        border: 2px solid black;
        transition: 0.3s all ease-in;
    }
`;



export const OutlineButton = styled(Button)`
    background-color: white;
    border: 2px solid black;
    color: black;
    &:hover{
        background-color: black;
        color:white;
        transition: 0.3s all ease-in;
    }
`;