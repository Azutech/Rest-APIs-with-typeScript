import {Request, Response} from 'express'
import { Router } from 'express'

const router = Router()

router.route('/').get((req: Request, res: Response) =>{
    res.status(200).json(`<h2>Hello from ${req.baseUrl}</h2>`)
})


export default router