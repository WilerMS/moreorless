import React from 'react'
import { useLocation } from 'react-router'
import styled from 'styled-components'
import Linked from '../Components/Button'

import wallpaper from './../Images/gameover.png'

const GameOver = () => {

    const {game, score} = useLocation();

    return (
        <Container>
            <div className="menu">
                <div className="logo">
                    <h1 className="title">GAMEOVER</h1>
                    <span className="score">Your score was {score}</span>
                </div>
                <div className="options">
                    <Linked path={`/game/${game}`} text="VOLVER A JUGAR"/>
                    <Linked path={'/'} text="VOLVER AL INICIO"/>
                </div>
            </div>
        </Container>
    )
}

const Container = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: url(${wallpaper});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    .menu {

        width: 50%;
        height: 80%;
        display: flex;
        flex-direction: column;
        justify-content: center;


        h1 {
            text-align: center;
            color: white;
            font-size: 100px;
            z-index: 3;
            font-weight: 100;
            font-family: 'Ubuntu', sans-serif;
        }

        .logo {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            width: 100%;
            height: 50%;
        }

        .score {
            font-size: 16px;
            margin-bottom: 50px;
            color: white;
        }

        .options {
            display: flex;
            width: 100%;
            height: 20%;
            justify-content: center;
            align-items: center;
            gap: 20px;
        }
    }
    
`;


export default GameOver;