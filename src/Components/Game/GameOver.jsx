import React from 'react'
import styled , {keyframes} from 'styled-components'
import background from './../../Images/gameover.png'

const GameOver = ({setGameOverState, setSecondValue, setVsState, setScore, score}) => {

    return (
        <Container>
            <div className="loseMessage">
                <h1 className="title">GAMEOVER</h1>
                <span className="score">Your score was {score}</span>
                <Button onClick={() => {
                    setSecondValue(false);
                    setGameOverState(false);
                    setVsState(0);
                    setScore(0)
                    }}
                >Try Again</Button>
            </div>
        </Container>
    )
}



const Button = styled.button`
    transition: all .5s ease;
    background: none;
    outline: none;
    border: 2px solid white;
    border-radius: 10px;
    width: 50%;
    height: 60px;
    font-size: 22px;
    color: white;
    cursor: pointer;

    &:hover {
        transform: scale(1.2);
    }
`;

const animation = keyframes`
    from {
        opacity: 0;
    } to {
        opacity: 1;
    }
`;

const Container = styled.div`
    animation: ${animation} .3s ease;
    animation-delay:4s;
    position: absolute;
    z-index: 3;
    width: 100%;
    height: 100%;
    background: black;
    background: url(${background});
    display: flex;
    justify-content: center;
    align-items: center;
    background-position: center;

    .score {
        font-size: 16px;
        margin-bottom: 50px;
    }
    .title {
        margin-bottom: -10px;
        text-shadow: 5px 5px 10px black;
    }

    .loseMessage {
        color: white;
        font-size: 40px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        animation: ${animation} .3s ease;

        @media (max-width: 700px) {
            font-size: 22px;
        }
    }
`;

export default GameOver;