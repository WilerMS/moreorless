import {useState} from 'react'

const FightersManagements = () => {

    const [fighters, setFighters] = useState([]);
    const [dataMode, setDataMode] = useState({description:"", title:"", id:""});
    const [currentFighter, setCurrentFighter] = useState(2);
    

    //Fetching fighter from the API
    const fetchFighters = (mode) => {
        fetch(`http://moreorless.api.com/games/${mode}`)
            .then(response => response.json())
                .then(({name, description, id_game, fighters}) => {
                    setDataMode({description:description, id:id_game, title:name});
                    fighters = fighters.sort(() => Math.random() - 0.5);
                    setFighters(fighters);
        }).catch(error=>console.log(error));
    }

    return {
        fighters, fetchFighters, dataMode, currentFighter, setCurrentFighter
    }
}


export default FightersManagements;
