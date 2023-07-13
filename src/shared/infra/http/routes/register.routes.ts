import { Router } from "express";
import {celebrate} from "celebrate"
import { registerValidator } from "../../../../modules/games/useCases/registerGame/validator"
import {RegisterGameController} from "../../../../modules/games/useCases/registerGame/RegisterGameController"
const registerRoutes = Router();
const registerGameController = new RegisterGameController()

registerRoutes.post('/', celebrate(registerValidator), registerGameController.handle)

export default registerRoutes