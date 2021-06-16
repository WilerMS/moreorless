import React from 'react'
import styled from 'styled-components'

const DonateButton = () => {
    return (
        <Container>
            <span>Donate</span>
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
    right: 40px;

    &:hover {
        transform: scale(1.1);
    }
`;

export default DonateButton;