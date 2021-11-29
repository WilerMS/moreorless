import {useState} from 'react'

const FightersManagements = () => {

    const [fighters, setFighters] = useState([]);
    const [fighter1, setFighter1] = useState({});
    const [fighter2, setFighter2] = useState({});
    const [fighter3, setFighter3] = useState({});
    const [dataMode, setDataMode] = useState({description:"", title:"", id:""});
    const [currentFighter, setCurrentFighter] = useState(3);

    //Fetching fighter from the API
    const fetchFighters = (mode) => {
        fetch(`http://moreorless.api.com/games/${mode}`)
            .then(response => response.json())
                .then(({name, description, id_game, fighters}) => {
                    setDataMode({description:description, id:id_game, title:name});
                    fighters = fighters.sort(() => Math.random() - 0.5);
                    setFighters(fighters);
                    setFighter1(fighters[0]);
                    setFighter2(fighters[1]);
                    setFighter3(fighters[2]);
        }).catch(error=>console.log(error));
    }

    const updateFighters = () => {
        setCurrentFighter((currentFighter<fighters.length-1) ? currentFighter+1 : 0);
        setFighter1(fighter2);
        setFighter2(fighter3);
        setFighter3(fighters[currentFighter]);
    }

    return {
        fighter1, fetchFighters,
        fighter2, updateFighters,
        fighter3, dataMode
    }
}


export default FightersManagements;
