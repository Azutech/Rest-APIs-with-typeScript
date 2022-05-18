import DB from '../database/database.json'

const getAllGames = () => {
    return DB.games
}

export default  { getAllGames}