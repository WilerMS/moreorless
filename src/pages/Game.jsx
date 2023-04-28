import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { useHistory } from 'react-router-dom'

import useFightersManagements from '../Hooks/useFightersManagements'
import {
    Fighter,
    Score,
    GuessBox,
    HighScore,
    VS
} from '../Components/Game'


const Game = () => {

    let { mode } = useParams()
    const history = useHistory()

    const { fetchFighters, setCurrentFighter, dataMode, currentFighter, fighters } = useFightersManagements()
    const [classTransition, setClassTransition] = useState("transition-off")
    const [secondValue, setSecondValue] = useState(false)
    const [vsState, setVsState] = useState(0)
    const [score, setScore] = useState(0)

    // eslint-disable-next-line
    useEffect(() => fetchFighters(Number(mode)), [mode])

    const checkComparison = (res) => {
        setSecondValue(true)
        if ((res === "more" && fighters[currentFighter - 2].value <= fighters[currentFighter - 1].value) ||
            (res === "less" && fighters[currentFighter - 2].value >= fighters[currentFighter - 1].value)) {
            setClassTransition("transition-on")
            setVsState(1)
            setTimeout(() => {
                setSecondValue(false)
                setClassTransition("transition-off")

                setCurrentFighter((currentFighter < fighters.length - 1) ? currentFighter + 1 : 2)
                setVsState(0)
                setScore(score + 1)
            }, 1500)
        } else {
            setVsState(2)
            setTimeout(() => history.push({ pathname: '/gameover', score, game: mode }), 1500)
        }
    }

    return (
        <Container className="game">
            <div className={`game-transition ${classTransition}`}>
                <Fighter {...fighters[currentFighter - 2]} />
                <Fighter second secondValue={secondValue} {...fighters[currentFighter - 1]}>
                    <GuessBox checkComparison={checkComparison} />
                </Fighter>
                <Fighter second secondValue={false} {...fighters[currentFighter]}>
                    <GuessBox checkComparison={checkComparison} />
                </Fighter>
            </div>

            <VS result={vsState} />
            <Score score={score} />
            <HighScore score={score} id={dataMode.id} />
        </Container>
    )
}


const Container = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 700px) {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .game-transition {
        position: absolute;
        top: 0;
        left: 0;
        width: 150%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        @media (max-width: 700px) {     
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            width: 100%;
            height: 150%;
        }
    }

    .transition-on {
        transition: transform 1s ease-out 1s,-webkit-transform .4s ease-out 1s;
        transform: translate3d(-33.333%, 0,0);

        .fighter:nth-child(2n){
            border-right: 2 solid white;
        }

        @media (max-width: 700px) {
            transform: translate3d(0,-33.333%,0);
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            width: 100%;
            height: 150%;
        }
    }
`

export default Game
