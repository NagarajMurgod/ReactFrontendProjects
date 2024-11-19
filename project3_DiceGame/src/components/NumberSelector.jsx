import { useState } from "react";
import styled from "styled-components";


const NumberSelector = ({setError, error,selectedNumber, setSelectedNumber}) => {

    const arrNumber = [1,2,3,4,5,6];
    
    const numberSelectorHandler = (value) => {
        setSelectedNumber(value);
        setError("");
    }
    return (
        <NumberSelectorContainer>
            <p className="error">{error}</p>
            <div class = "selectNumbers">
                {
                    arrNumber.map((value, i)=> {
                        return <Box 
                        onClick={()=>numberSelectorHandler(value)}
                        isSelected = {
                            value === selectedNumber 
                        }
                        key={i}>{value}</Box>
                    })
                }

            </div>
            <p>Select Number</p>
        </NumberSelectorContainer>
    );
};

export default NumberSelector;

const NumberSelectorContainer = styled.div`
    margin-top: 22px;
    /* border: 1px solid red; */
    display: flex;
    flex-direction: column;
    align-items: end;
    .selectNumbers{
       display: flex; 
       gap: 24px;
    }
    p{
        font-size: 24px;
        font-weight: 700;
        margin-top: 10px;
        margin-bottom: 0;
    }

    .error{
        color: red;
    }
`;

const Box = styled.div`
    height: 72px;
    width: 72px;
    border: 1px solid black;
    display: grid;
    place-items: center;
    font-size: 24px;
    font-weight: 700;
    background-color: ${(props)=> (props.isSelected ? "black": "white")};
    color: ${(props)=> (!props.isSelected ? "black": "white")};
    cursor: pointer;
`;