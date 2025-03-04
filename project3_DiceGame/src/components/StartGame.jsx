import styled from "styled-components"
import { Button } from "../styled/Button";


const StartGame = ({toggle}) => {
    return (
        <>
            <Container>
                <div>
                    <img src="/images/dices.png" alt="dices image" />
                </div>
                <div className="content">
                    <h1 >DICE GAME</h1>
                    <Button onClick={toggle}>Play Now</Button>
                </div>
            </Container>
        </>
    );
};


const Container = styled.div`
    max-width: 1180px;
    height: 100vh;
    display: flex;
    margin: 0 auto;
    align-items: center;
    gap: 50px;


    .content{
        display: flex;
        flex-direction: column;
        
    }
    .content h1{
        font-size: 85px;
        white-space: nowrap;
        margin-bottom: 20px;

    }

`;




export default StartGame


