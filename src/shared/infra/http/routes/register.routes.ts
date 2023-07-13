import { Router } from "express";
import {RegisterGameController} from "../../../../modules/useCases/registerGame/RegisterGameController"
const registerRoutes = Router();
const registerGameController = new RegisterGameController()

registerRoutes.post('/', registerGameController.handle)

export default registerRoutes