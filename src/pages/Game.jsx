import React, { useState, useEffect } from 'react'
import Fighter from '../Components/Game/Fighter'
import { Container } from '../Components/Game/GameElements'
import { useParams } from 'react-router-dom'
import VS from '../Components/Game/Vs'
import Score from '../Components/Game/Score'
import HighScore from '../Components/HighScore'
import GuessBox from '../Components/Game/GuessBox'
import FightersManagements  from './../Hooks/FightersManagements'
import { useHistory } from 'react-router-dom';

const Game = () => {

    let {mode} = useParams();
    const history = useHistory();

    const {fetchFighters, setCurrentFighter, dataMode, currentFighter, fighters} = FightersManagements();
    const [classTransition, setClassTransition] = useState("transition-off");
    const [secondValue, setSecondValue] = useState(false);
    const [vsState, setVsState] = useState(0);
    const [score, setScore] = useState(0);

    useEffect(() => fetchFighters(mode), [mode]);

    const checkComparison = (res) => {
        setSecondValue(true);
        if ((res==="more" && parseInt(fighters[currentFighter-2].value) <= parseInt(fighters[currentFighter-1].value)) || 
            (res==="less" && parseInt(fighters[currentFighter-2].value) >= parseInt(fighters[currentFighter-1].value))) {
                setClassTransition("transition-on");
                setVsState(1);
                setTimeout(() => {
                    setSecondValue(false);
                    setClassTransition("transition-off");

                    setCurrentFighter( (currentFighter<fighters.length-1) ? currentFighter+1 : 2 );
                    setVsState(0);
                    setScore(score+1);
                }, 1500);
        } else {
            setVsState(2);
            setTimeout(() => history.push({pathname: '/gameover', score, game: mode}), 1500);
        }
    }

    return (
        <Container className="game">
            <div className={`game-transition ${classTransition}`}>
                <Fighter {...fighters[currentFighter-2]}/>
                <Fighter second secondValue={secondValue} {...fighters[currentFighter-1]}>
                    <GuessBox checkComparison={checkComparison}/>
                </Fighter>
                <Fighter second secondValue={false} {...fighters[currentFighter]}>
                    <GuessBox checkComparison={checkComparison}/>
                </Fighter>
            </div>
            
            <VS result={vsState}/>
            <Score score={score}/>
            <HighScore score={score} id={dataMode.id}/>
        </Container>
    )
}

export default Game;
