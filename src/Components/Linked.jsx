import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Linked = styled(Link)`
    text-decoration: none;
    padding: 10px 0;
    transition: all .5s ease;
    font-size: 20px !important;
    border: 2px solid white;
    border-radius: 15px;
    width: 30%;
    text-align: center;
    color: white;
    margin: 5px 0;
    cursor: pointer;

    &:hover {
        transform: scale(1.1);
    }
`; 

export default Linked;