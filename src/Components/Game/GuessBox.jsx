import React from 'react'
import styled from 'styled-components'


const GuessBox = ({checkComparison}) => {

    const answerMore = (res) => {
      checkComparison("more");
    }
    const answerLess = (res) => {
      checkComparison("less");
    }

    return (
        <Container>
            <span onClick={(answerMore)} className="more" id="more">More</span>
            <span onClick={answerLess} className="less" id="less">Less</span>
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
    }

    .more:hover, .less:hover {
      background: #ffffff1c;
      transform: scale(1.1);
    }
`;


export default GuessBox;