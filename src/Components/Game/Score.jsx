import React from 'react'
import styled from 'styled-components'

const Score = ({ score }) => {
    return (
        <ScoreContainer>
            <span>Score: <b>{score}</b></span>
        </ScoreContainer>
    )
}

const ScoreContainer = styled.div`
    z-index: 1;
    color: white;
    text-shadow: 1px 1px 10px black;
    position: absolute;
    top: 20px;
    right: 30px;
`;

export default Score;