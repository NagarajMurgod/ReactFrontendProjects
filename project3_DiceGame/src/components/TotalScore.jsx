import styled  from "styled-components"

const TotalScore = () => {
    return (
        <ScoreContainer>
            <h1>0</h1>
            <p>Total Score</p>

        </ScoreContainer>
    )
}


export default TotalScore;

const ScoreContainer = styled.div`
    max-width: 200px;
    text-align: center;
    padding: 0;
    h1 {
        font-size: 100px;
        margin: 0;
        /* border: 1px solid red; */
    }
    p{
        font-size: 24px;
        font-weight: 100;
        margin: 0;
    }
`;