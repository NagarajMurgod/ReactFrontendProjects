import styled from "styled-components";
import NumberSelector from "./NumberSelector";
import TotalScore from "./TotalScore";

const GamePlay =() =>{

    return(
        <Main>
            <div className="top_section">
                <TotalScore/>
                <NumberSelector/>
            </div>
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
`;
