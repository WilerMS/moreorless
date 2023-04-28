import React from 'react'
import styled from 'styled-components'


import Linked from './../Components/Button'
import wallpaper from './../Images/fondo_ibaiquiz.jpg'
import logo from './../Images/logo_ibaiquiz.png'

const Home = () => {
    return (
        <Container>
            {/* <div className="bg_dark"></div> */}

            <div className="menu">
                <div className="logo">
                    <img src={logo} alt="More or less logo" />
                </div>
                <div className="options">
                    <Linked path={`/game/1`} text="ALEATORIO"/>
                    <Linked path={'/categories'} text="MÁS JUEGOS"/>
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


export default Home;