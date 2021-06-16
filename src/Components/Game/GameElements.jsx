import styled from 'styled-components'

const Container = styled.div`
position: relative;
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;


@media (max-width: 700px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

    .game-transition {
        position: absolute;
        top: 0;
        left: 0;
        width: 150%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        

        @media (max-width: 700px) {     
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            width: 100%;
            height: 150%;
        }
    }

    .transition-on {
        transition: transform 1s ease-out 1s,-webkit-transform .4s ease-out 1s;
        transform: translate3d(-33.333%, 0,0);

        .fighter:nth-child(2n){
            border-right: 2 solid white;
        }

        @media (max-width: 700px) {
            transform: translate3d(0,-33.333%,0);
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            width: 100%;
            height: 150%;
        }
    }

`;

export {Container};