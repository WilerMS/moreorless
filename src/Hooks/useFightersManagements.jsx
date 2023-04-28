import { useState } from 'react'
import gamesInfo from '../Const/Games'

const useFightersManagements = () => {

    const [fighters, setFighters] = useState([]),
          [dataMode, setDataMode] = useState({ description: "", title: "", id: "" }),
          [currentFighter, setCurrentFighter] = useState(2)

    const fetchFighters = (mode) => {

        let currentGame = gamesInfo.find(({ id_game }) => id_game === mode)
        let { name, description, id_game, fighters } = currentGame

        setDataMode({
            description,
            id: id_game, title: name
        })

        setFighters(fighters.sort(() => Math.random() - 0.5))
    }

    return {
        fighters, fetchFighters, dataMode, currentFighter, setCurrentFighter
    }
}

export default useFightersManagements;
