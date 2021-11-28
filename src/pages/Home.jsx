import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import wallpaper from './../Images/bg_home.jpg'
import logo from './../Images/logo2.png'

const Home = () => {
    return (
        <Container>
            <div className="bg_dark"></div>

            <div className="menu">
                <div className="logo">
                    <img src={logo} alt="More or less logo" />
                </div>
                <div className="options">
                    <Linked to={`/game/1`} className="random">
                        <span>ALEATORIO</span>
                    </Linked>
                    <Linked to={'/categories'} className="categories">
                        <span>MÁS JUEGOS</span>
                    </Linked>
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

    .bg_dark {
        background-color: #000000c1;
        backdrop-filter: blur(5px);
        position: fixed;
        width: 100vw;
        height: 100vh;
        z-index: 0;
    }

    & > div {
        z-index: 1;
    }

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
            height: 80%;
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

const Linked = styled(Link)`
    text-decoration: none;
    padding: 10px 0;
    transition: all .5s ease;
    font-size: 20px !important;
    border: 2px solid white;
    border-radius: 15px;
    width: 30%;
    text-align: center;
    color: white;
    margin: 5px 0;
    cursor: pointer;

    &:hover {
        transform: scale(1.1);
    }
`; 


export default Home;