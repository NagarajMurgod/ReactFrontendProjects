import styled from "styled-components"

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

const Button = styled.button`
    color: white;
    padding: 10px 18px;
    background-color: #000000;
    border-radius: 5px;
    width: 220px;
    border: none;
    font-size: 16px;
    transition: 0.3s all ease-in;
    cursor: pointer;
    align-self: flex-end;


    &:hover{
        background-color: white;
        color: black;
        border: 2px solid black;
        transition: 0.3s all ease-in;
    }
`;


export default StartGame


