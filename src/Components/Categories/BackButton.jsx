import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const BackButton = () => {
    return (
        <Container>
            <span><FontAwesomeIcon icon={faArrowLeft} /> Back</span>
        </Container>
    )
}

const Container = styled.div`
    position: absolute;
    top: 30px;
    color: white;
    border-radius: 10px;
    border: 1px solid white;
    width: 130px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 22px;
    transition: all .5s ease;
    cursor: pointer;
    z-index: 1;
    left: 40px;

    &:hover {
        transform: scale(1.1);
    }
`;

export default BackButton;