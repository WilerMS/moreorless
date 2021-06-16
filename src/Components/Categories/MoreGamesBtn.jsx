import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlus} from '@fortawesome/free-solid-svg-icons'

const MoreGamesBtn = () => {

    const link = `/game/`;

    return (
        <Container to={link}>
            <div className="category">
                <span className="check"><FontAwesomeIcon icon={faPlus} /></span>
                <p>Add Games</p>
            </div>
        </Container>
    )
}

const Container = styled(Link)`
    border: 3px solid #ffffff9e;
    //margin: 15px;
    display: inline-block;
    background: white;
    width: 200px;
    height: 250px;
    transition: all .5s ease;
    border-radius: 10px;
    text-decoration: none;
    background: url('https://images8.alphacoders.com/570/thumb-1920-570408.jpg');
    background-size: cover;
    background-position: center;
    box-shadow: 1px 1px 10px #0000008f;
    z-index: 3;

    &:hover {
        transform: scale(1.05);
    }
    
    @media (max-width: 700px) {
        & {
            width: 150px;
            height: 200px; 
        }
    }

    .category {
        position: relative;
        width: 100%;
        height: 100%;
        flex-direction: column;
        display: flex;
        justify-content: flex-end;
        align-items: center;

        p {
            color: white;
            text-shadow: 1px 1px 5px black;
            margin-bottom: 20px;
            text-align: center;
        }

        span {
            position: absolute;
            height: 100%;
            font-size: 60px;
            display: flex;
            justify-content: center;
            align-items: center;
            color: white;
            text-shadow: 1px 1px 5px black;

            svg {
                filter: drop-shadow( 1px 1px 10px rgba(0, 0, 0, .7));
            }
        }
    }
`;

export default MoreGamesBtn;
