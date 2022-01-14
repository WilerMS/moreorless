import {useState} from 'react'
import gamesInfo from './../Const/Games'

const FightersManagements = () => {

    const [fighters, setFighters] = useState([]);
    const [dataMode, setDataMode] = useState({description:"", title:"", id:""});
    const [currentFighter, setCurrentFighter] = useState(2);

    const fetchFighters = (mode) => {
        let currentGame = gamesInfo.filter(({id_game}) => id_game === mode)[0];
        let {name, description, id_game, fighters} = currentGame;
        setDataMode({description:description, id:id_game, title:name});
        fighters = fighters.sort(() => Math.random() - 0.5);
        setFighters(fighters)
    }

    return {
        fighters, fetchFighters, dataMode, currentFighter, setCurrentFighter
    }
}

export default FightersManagements;
