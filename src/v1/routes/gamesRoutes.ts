import { Request, Response } from "express";
import { Router } from "express";
import gamesControllers from '../../controllers/gamesControllers'
const router = Router();


router.get("/", gamesControllers.getAllGames);

router.get("/:workoutId", gamesControllers.getOneGames);
router.post("/", gamesControllers.createGames);
router.patch("/:workoutId", gamesControllers.updateOneGame);
router.delete("/:workoutId", gamesControllers.deleteOneGame);


export default router
