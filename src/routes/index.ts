import { Router } from "express";
import registerRoutes from "./register.routes" 

const routes = Router()

routes.use("/",registerRoutes)
export {routes}