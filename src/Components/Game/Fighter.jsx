import React from 'react'
import styled, {keyframes} from 'styled-components'


const Fighter = ({children, second, name, value, background, secondValue, description}) => {
    return (
        <Container background={background} second={second} className="fighter">
            <div className="bg_black"></div>
            <div className="title">
                <span className="result_title">{name}</span>
                <span className="result_has">tiene</span>
                {   second ? 
                        secondValue ? 
                            (   <>
                                    <span className="result_views">{new Intl.NumberFormat().format(value)}</span>
                                    <span className="result_desc">{description && description.toLowerCase()}</span>
                                </>
                            ) 
                        : 
                        children 
                    :  
                        (   <>
                                <span className="result_views">{new Intl.NumberFormat().format(value)}</span>
                                <span className="result_desc">{description && description.toLowerCase()}</span>
                            </>
                        )
                }
            </div> 
        </Container>
    )
}

const animation = keyframes`
    from {
        background-position: right;
        opacity: 0;
    } to {
        opacity: 1;
        background-position: center;
    }
`;

const Container = styled.div`
    position: relative;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 33.3333%;
    height: 100%;
    background: url(${props => props.background});
    background-size: cover;
    background-position: 50%;
    ${props => props.second ? "border-left: 2px solid white;" : "border-right: 2px solid white;"}

    @media (max-width: 700px) {
        width: 100%;
        height: 33.3333%;
        border: 0;
        ${props => props.second ? "border-top: 2px solid white;" : "border-bottom: 2px solid white;"}
    
        .result_title {
            font-size: 35px !important;
        }
    }

    .title {
        color: white;
        text-align: center;
        text-shadow: 1px 1px 10px black;
        text-transform: uppercase;
        font-weight: bold;
        font-size: 22px;
        width: 70%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .title span:first-child {
        font-size: 50px;
    }

    .title .result_views {
        font-size: 50px;
        font-weight: bold;
    }

    .bg_black {
        position: absolute;
        z-index: -1;
        width: 100%;
        height: 100%;
        background: black;
        opacity: .4;
    }

    .result_views {
        animation: ${animation} .5s ease;
    }

    .result_desc {
        font-weight: lighter;
        font-size: 15px !important;
        text-transform: lowercase;
        margin-top: -10px;
    }
`;

export default Fighter;