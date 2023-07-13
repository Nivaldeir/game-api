import { Request,Response} from "express";
import { IGameDTO } from "../../games/infra/entities/Game";
import {RegisterGameUseCase} from "./RegisterGameUseCase"
import {container} from "tsyringe" 

export class RegisterGameController{
  async handle(req: Request, res: Response): Promise<Response>{
    const registerUseCase = container.resolve(RegisterGameUseCase)
    const {releaseData,designer, developer, genre,mode,name,platform}:IGameDTO = req.body
    await registerUseCase.execute({releaseData,designer, developer, genre,mode,name,platform});
    return res.status(201).json({message: "Registro criado com sucesso!"})
  }
}