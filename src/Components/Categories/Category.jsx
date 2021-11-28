import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Category = ({id_game, name, about, title, background}) => {

    const link = `/game/${id_game}`;

    return (
        <Container to={link}>
            <img src={background} alt={name} />
            <div className="info">
                <div className="title">
                    <span>{name}</span>
                </div>
                <div className="description">
                    <p>{about}</p>
                </div>
            </div>
        </Container>
    )
}

const Container = styled(Link)`
    box-shadow: 0px 0px 9px 0px #00000040;
    position: relative;
    width: 100%;
    height: 250px;
    transition: all .5s ease;
    border-radius: 5px;
    overflow: hidden;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: all .5s ease;
    }

    .info {
        background: white;
        bottom: -30%;
        font-size: 14px;
        height: calc(50% - 20px);
        position: absolute;
        padding: 10px;
        width: calc(100% - 20px);
        transition: all .5s ease-out;

        .title {
            color: black;
            font-weight: 600;
        }

        .description {
            color: #000000ac;
            font-size: 12px;
            transition: opacity .6s ease;
            transition-delay: .4s;
            opacity: 0;
        }
    }

    &:hover {
        transform: scale(1.05);
        img {transform: scale(1.06);}
        
        .info {
            bottom: 0;
            .description {
                opacity: 1;
            }
        }
    }
`;

export default Category;
