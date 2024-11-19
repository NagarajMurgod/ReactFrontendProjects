import styled from "styled-components";
import NumberSelector from "./NumberSelector";
import TotalScore from "./TotalScore";
import RoleDice from "./RoleDice";
import { useState } from "react";
import { Button, OutlineButton } from "../styled/Button";
import Rules from "./Rules";

const GamePlay =() =>{
    const [score, setScore] = useState(0);
    const [selectedNumber, setSelectedNumber] = useState();
    const [currentDice, setCurrentDice] = useState(1);
    const [error, setError] = useState("");
    const [showRules, setShowRules] = useState(false)

    const generateRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max-min) + min);
    }

    const roleDice = () => {
        if(!selectedNumber){
            setError("You have not selected any number")
            return;
        }
        const randomNumber = generateRandomNumber(1, 7);
        setCurrentDice(prev => randomNumber);

        if(selectedNumber === randomNumber){
            setScore(prev => prev + randomNumber)
        }
        else{
            setScore(prev => Math.max(0,prev - 2))
        }

        setSelectedNumber(undefined)
    }

    const resetScore = () =>{
        setScore(0)
    }   

    return(
        <Main>
            <div className="top_section">
                <TotalScore score = {score}/>
                <NumberSelector 
                    error = {error}
                    setError = {setError}
                    selectedNumber={selectedNumber}
                    setSelectedNumber={setSelectedNumber}
                />
            </div>
            <RoleDice
                currentDice={currentDice}
                roleDice={roleDice}
            />
            <div className="btn">
                <OutlineButton onClick={resetScore}>Reset</OutlineButton>
                <Button onClick={() => setShowRules(prev => !prev)}>{showRules ? "Hide" : "show"} Rules</Button>
            </div>
            { showRules && <Rules/> }
        </Main>
    )
};


export default GamePlay;

const Main = styled.div`
    /* border: 1px solid red; */

    .top_section {
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    .btn{
        margin-top: 40px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
    }
`;
