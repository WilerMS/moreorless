import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const HighScore = ({ score, id }) => {

    const [highScore, setHighScore] = useState(0)

    useEffect(() => {
        const HighScore = localStorage.getItem(id)
        if (!HighScore) localStorage.setItem(id, 0)
        if (HighScore <= score) localStorage.setItem(id, score)
        setHighScore(localStorage.getItem(id))   // eslint-disable-next-line     
    }, [score, id]);

    return (
        <Container><span>High score: <b>{highScore}</b></span></Container>
    )
}

const Container = styled.div`
    z-index: 1;
    color: white;
    text-shadow: 1px 1px 10px black;
    position: absolute;
    bottom: 20px;
    left: 30px; 
`;

export default HighScore;
