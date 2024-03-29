import React from 'react'
import styled from 'styled-components'


const GuessBox = ({checkComparison}) => {
    return (
        <Container>
            <span onClick={() => checkComparison("more")} className="more" id="more">MÁS</span>
            <span onClick={() => checkComparison("less")} className="less" id="less">MENOS</span>
        </Container>
    )
}

const Container = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .more, .less {
      outline: none;
      background: none;
      transition: all .5s ease;
      font-size: 20px !important;
      border: 2px solid white;
      border-radius: 15px;
      width: 50%;
      text-align: center;
      margin: 5px 0;
      cursor: pointer;
      position: relative;
      overflow: hidden;

      &:hover {
        background: #ffffff1c;
        transform: scale(1.1);
      }
    }

    .more:after, .less:after {
      content: '';
      position: absolute;
      background: white;
      width: 100%;
      height: 100%;
      left: 0;
      top: 100%;
    }
`;


export default GuessBox;