
import express, { Application, Request, Response } from 'express'
import v1WorkoutRouter from './v1/routes/gamesRoutes'
import bodyParser from 'body-parser'
const app: Application = express()
const PORT =  process.env.PORT || 3000

// app.get('/', (req: Request, res: Response) => {
//     res.status(200).json({message: 'Hello'})
// })


// ** ADD

// app.use('/api/v1', v1Router)

app.use(bodyParser.json())
app.use('/api/v1/workouts', v1WorkoutRouter)


app.listen(PORT, () => {
    console.log(`App is listening at ${PORT}`)
})
