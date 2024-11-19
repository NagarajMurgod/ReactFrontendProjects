import { useState } from "react";
import styled from "styled-components";

const RoleDice = ({currentDice, roleDice}) => {

    return (
        <DiceContainer>
            <div className="dice" onClick={roleDice}>
                <img src={`/images/dice/dice_${currentDice}.png`} alt="dice image" />
            </div>
            <p>Click on Dice to roll</p>
        </DiceContainer>

    )
}

export default RoleDice;


const DiceContainer = styled.div`
    display: flex;
    align-items: center;
    margin-top: 48px;
    flex-direction: column;
    /* border: 1px solid red; */

    .dice{
        cursor: pointer;
    }

    p{
        font-size: 24px;
    }
`;