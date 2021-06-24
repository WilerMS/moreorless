import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Category from './../Components/Categories/Category'
import MoreGamesBtn from './../Components/Categories/MoreGamesBtn'
import PremiumModeBtn from './../Components/Categories/PremiumModeBtn'
import BackButton from './../Components/Categories/BackButton'
import DonateButton from './../Components/Categories/DonateButton'
import ParticlesJS from './../Components/Particles/Particles'
import wallpaper from './../Images/wallpaper2.png'

let backgrounds = [
   ' https://images5.alphacoders.com/432/thumb-1920-432096.jpg',
    'https://images7.alphacoders.com/718/thumb-1920-718139.jpg',
    'https://images7.alphacoders.com/113/thumb-1920-1131940.png',
    'https://images2.alphacoders.com/589/thumb-1920-589399.jpg',
    'https://images2.alphacoders.com/474/thumb-1920-474157.jpg',
    'https://images7.alphacoders.com/423/thumb-1920-423137.jpg',
    'https://images5.alphacoders.com/324/thumb-1920-324853.png',
    'https://images4.alphacoders.com/207/thumb-1920-207828.jpg'
];

 const Categories = () => {

    const [games, setGames] = useState([]);
    useEffect(()=>{
        fetchGames();
    }, []);

    const fetchGames = () => {
        fetch(`http://moreorless.api.com/games`).then(response => response.json()).then((data) => {
            setGames(data);
            console.log(data);
        }).catch(error=>console.log(error));
    }

    return (
        <Container>
            {/**<BackButton/>
            <DonateButton/>
            <div className="bg_black"></div>*/}
            <div className="mode__list">
                <div className="grid__list">
                    {games.map(({...games}, index)=>{
                        return(<Category key={index} {...games}/> );
                        })
                    }
                    <PremiumModeBtn />
                    <MoreGamesBtn />
                </div> 
            </div>
            <ParticlesJS/>
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
    //background: url(${backgrounds[Math.floor(Math.random()*backgrounds.length)]});
    background: url(${wallpaper});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    h1 {
        color: white;
        font-size: 60px;
        z-index: 3;
    }
    

    .mode__list {
        height: 53%;
        overflow-y: auto;
        padding: 30px;

        &::-webkit-scrollbar {
            background: none;
            width: 5px;
            height: 50%;
        }
        &::-webkit-scrollbar-thumb {
            background: white;
            border-radius: 10px;
        }

        .grid__list {
            display: grid;
            grid-template-columns: repeat(6, 1fr);
            grid-gap: 30px;
            width: 100%;
            height: 100%;

            @media (max-width: 1420px) {grid-template-columns: repeat(5, 1fr);}
            @media (max-width: 1190px) {grid-template-columns: repeat(3, 1fr);}
            @media (max-width: 730px) {grid-template-columns: repeat(2, 1fr);}
        }

        @media (max-width: 1420px) {max-width: 100vw;}
        @media (max-width: 1190px) {max-width: 100vw;}
        @media (max-width: 730px) {
            & {
                height: 70vh;
                max-width: 100vw;
            }

            &::-webkit-scrollbar-thumb {
                background: none;
                border-radius: 10px;
            }
        }
    }

    .bg_black {
        position: absolute;
        width: 100vw;
        height: 100vh;
        background: #00000044;
        z-index: 0;
    }
`;

export default Categories;