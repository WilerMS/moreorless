import React from 'react'
import styled, {keyframes} from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTimes, faCheck} from '@fortawesome/free-solid-svg-icons'

const VS = ({result}) => {

    const vs = {
        0: (<span className="vs">VS</span>),
        1: (<span className="check"><FontAwesomeIcon icon={faCheck} /></span>),
        2: (<span className="times"><FontAwesomeIcon icon={faTimes} /></span>)
    }

    return (
        <Vs>
            {vs[result]}
        </Vs>
    )
}

const animation = keyframes`
    from {
        transform: rotate(-720deg);
    } to {
        transform: rotate(0deg);
    }
`;

const Vs = styled.div`
    z-index: 1;
    font-weight: bold;
    font-size: 22px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
    position: absolute;
    background-color: white;
    width: 80px;
    height: 80px;
    border-radius: 50%;

    .vs {
        color: black;
    }
    .check {
        font-size: 32px;
        color: green;
        animation: ${animation} .5s ease;
    }
    .times {
        font-size: 32px;
        color: red;
        animation: ${animation} .5s ease;
    }
`;

export default VS;

