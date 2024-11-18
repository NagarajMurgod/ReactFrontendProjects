import { useState } from "react";
import styled from "styled-components";


const NumberSelector = () => {

    const arrNumber = [1,2,3,4,5,6];
    const [selectedNumber, setSelectedNumber] = useState(1);


    return (
        <NumberSelectorContainer>
            <div class = "selectNumbers">
                {
                    arrNumber.map((value, i)=> {
                        return <Box 
                        onClick={ () => setSelectedNumber(value)}
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