import styled from "styled-components";

const Rules = () => {
    return (
        <RulesContainer>
            <h2>How to play dice game</h2>
            <div className="text">
                <ul>
                    <li>Select any number</li>
                    <li>Click on dice image</li>
                    <li>After click on dice if selected number is equal to dice number you will get same point as dice value</li>
                    <li>if you get wrong guess then 2 point will be deducted</li>
                </ul>
            </div>
        </RulesContainer>
    );
};


export default Rules;


const RulesContainer = styled.div`
    background-color: #f8dfdf;
    max-width: 800px;
    padding: 20px;
    margin: 0 auto;
    margin-top: 40px;
    border-radius: 10px;

    h2{
        font-size: 24px;
        /* text-align: center; */
    }

    .text{
        margin-top: 24px;
    }
    ul{
        margin-left: 15px;
        line-height: 25px;
    }

`;