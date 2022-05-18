import games from '../database/games'

const getAllGames = () => {
    const allgames = games.getAllGames()
   
    return allgames
}

const getOneGames = () => {
    return
}
const createNewGames = () => {
    return
}
const updateOneGame = () => {
    return
}
const deleteOneGame = () => {
    return
}

export default {getAllGames, getOneGames, createNewGames, updateOneGame, deleteOneGame}