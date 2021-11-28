import React, { useEffect, useState } from 'react'
import styled, {keyframes} from 'styled-components'
import Category from './../Components/Categories/Category'
import wallpaper from './../Images/bg_home.jpg'

const Categories = () => {

    const [games, setGames] = useState([]);
    useEffect(() => fetchGames(), []);

    const fetchGames = () => {
        fetch(`http://moreorless.api.com/games`)
            .then(response => response.json())
                .then((data) => setGames(data))
                .catch(error=>console.log(error));
    }

    return (
        <Container>
            <div className="bg_dark"></div>
            <div className="mode__list">
                <div className="grid__list">
                    {games.map((game, index)=> <Category key={index} {...game}/>)}
                </div> 
            </div>
        </Container>
    )
}

const animation = keyframes`
    from {
        opacity: 0;
    } to {
        opacity: 1;
    }
`;

const Container = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(8px);
    background: url(${wallpaper});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    h1 {
        color: white;
        font-size: 60px;
        z-index: 3;
    }

    .bg_dark {
        background-color: #000000c1;
        backdrop-filter: blur(5px);
        position: fixed;
        width: 100vw;
        height: 100vh;
        z-index: 0;
        //opacity: .5;
    }

    .mode__list {
        max-width: 1250px;
        width: 70vw;
        height: 55%;
        overflow-y: auto;
        padding: 30px;
        animation: ${animation} 2s ease;

        

        &::-webkit-scrollbar {
            background: none;
            width: 5px;
        }
        
        &::-webkit-scrollbar-thumb {
            background: white;
            border-radius: 10px;
        }

        .grid__list {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
            grid-gap: 30px;
            width: 100%;
            height: 100%;
        }

        @media (max-width: 1420px) {max-width: 100vw;}
        @media (max-width: 730px) {
            & {
                height: 70vh;
                max-width: 100vw;
            }

            &::-webkit-scrollbar-thumb {
                display: none;
            }
        }
    }
`;

export default Categories;