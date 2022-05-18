import {Request, Response} from 'express'
import gamesServices from '../services/gamesServices'

const getAllGames = async (req: Request, res: Response) => {
    const allgames = gamesServices.getAllGames()
    await res.send({status: 'Ok', data: allgames})
} 
const getOneGames = async (req: Request, res: Response) => {
    const games = gamesServices.getOneGames()
    await res.send('Get all games')
} 
const createGames = async (req: Request, res: Response) => {
    const createdgames = gamesServices.createNewGames()
    await res.send('create a new game')
} 
const updateOneGame = async (req: Request, res: Response) => {
    const updatedGame = gamesServices.updateOneGame()
    await res.send('Update an existing game')
} 
const deleteOneGame = async (req: Request, res: Response) => {
    gamesServices.deleteOneGame()
    await res.send('Delete an existing games')
} 

 export default {getAllGames, getOneGames, createGames, updateOneGame, deleteOneGame}