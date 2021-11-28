import React, {useState, useEffect} from 'react'
import Fighter from '../Components/Game/Fighter'
import {Container} from '../Components/Game/GameElements'
import {useParams} from 'react-router-dom'
import VS from '../Components/Game/Vs'
import Score from '../Components/Game/Score'
import HighScore from '../Components/HighScore'
import GuessBox from '../Components/Game/GuessBox'
import GameOver from '../Components/Game/GameOver'

const Game = () => {

    let {mode} = useParams();
    
    const [classTransition, setClassTransition] = useState("transition-off");
    const [fighters, setFighters] = useState([]);
    const [currentFighter, setCurrentFighter] = useState(3);
    const [dataMode, setDataMode] = useState({description:"", title:"", id:""});
    const [gameOverState, setGameOverState] = useState(false);
    const [secondValue, setSecondValue] = useState(false);
    const [vsState, setVsState] = useState(0);
    const [score, setScore] = useState(0);
    const [fighter1, setFighter1] = useState({});
    const [fighter2, setFighter2] = useState({});
    const [fighter3, setFighter3] = useState({});

    //Fetching fighter from the API
    const fetchFighters = (mode) => {
        fetch(`http://moreorless.api.com/games/${mode}`)
            .then(response => response.json())
                .then(({name, description, id_game, fighters}) => {
                    setDataMode({description:description, id:id_game, title:name});
                    fighters = fighters.sort(() => Math.random() - 0.5);
                    setFighters(fighters);
                    setFighter1(fighters[0]);
                    setFighter2(fighters[1]);
                    setFighter3(fighters[2]);
        }).catch(error=>console.log(error));
    }

    useEffect(() => fetchFighters(mode), [mode]);

    const gameOver = () => {
        setVsState(2);
        setTimeout(() => setGameOverState(true), 1500);
        setFighters(fighters.sort(function() {return Math.random() - 0.5}));
    }

    const succesLevel = () => {
        setClassTransition("transition-on");
        setVsState(1);
        setTimeout(() => {
            setSecondValue(false);
            setCurrentFighter((currentFighter<fighters.length-1) ? currentFighter+1 : 0);
            setClassTransition("transition-off");
            setFighter1(fighter2);
            setFighter2(fighter3);
            setFighter3(fighters[currentFighter]);
            setVsState(0);
            setScore(score+1);
        }, 1500);
    }

    const checkComparison = (res) => {
        setSecondValue(true);
        if (res==="more") {
            (parseInt(fighter1.value) <= parseInt(fighter2.value)) ? succesLevel() : gameOver();
        } else if (res==="less") {
            (parseInt(fighter1.value) >= parseInt(fighter2.value)) ? succesLevel() : gameOver();
        }
    }

    return (
        <Container className="game">
            <div className={`game-transition ${classTransition}`}>
                <Fighter {...fighter1} description={dataMode.description}/>
                <Fighter second secondValue={secondValue} {...fighter2} description={dataMode.description}>
                    <GuessBox checkComparison={checkComparison}/>
                </Fighter>
                <Fighter second secondValue={false} {...fighter3} description={dataMode.description}>
                    <GuessBox checkComparison={checkComparison}/>
                </Fighter>
            </div>
            
            <VS result={vsState}/>
            <Score score={score}/>
            <HighScore score={score} id={dataMode.id}/>
            {(gameOverState) && 
                (<GameOver 
                    setGameOverState={setGameOverState} 
                    setSecondValue={setSecondValue} 
                    setVsState={setVsState}
                    score={score} setScore={setScore}
                />)
            }
        </Container>
    )
}

export default Game;
