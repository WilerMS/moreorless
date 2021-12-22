import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Linked = ({text, path}) => {
    return (
        <Container to={path}>
            <div className="bg_white"></div>
            <span>{text}</span>
        </Container>
    )
}


const Container = styled(Link)`
    display: flex;
    justify-content: center;
    text-decoration: none;
    padding: 10px 0;
    transition: all .5s ease;
    font-size: 20px !important;
    border: 2px solid white;
    border-radius: 15px;
    width: 30%;
    height: 30px;
    text-align: center;
    color: white;
    cursor: pointer;
    position: relative;
    overflow: hidden;

    &:hover {
        transform: scale(1.1);
        color: black;

        .bg_white {

            top: 0;
            opacity: 1;

        }
    }
    
    span {
        z-index: 99;
        position: absolute;
    }

    .bg_white {
        transition: all .5s ease;
        position: absolute;
        background: white;
        width: 110%;
        height: 110%;
        top: 100%;
        opacity: 0;
    }
`;

export default Linked;