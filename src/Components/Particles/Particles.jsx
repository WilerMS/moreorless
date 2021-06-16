import React from 'react'
import params from './params'
import Particles from 'react-particles-js';
import styled from 'styled-components'

const ParticlesJS = () => {
    return (
        <Container>
            <Particles params={params}/>
        </Container>
        
    )
}

const Container = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 0;
    opacity: .1;
`;

export default ParticlesJS;