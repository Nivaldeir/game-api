import { RegisterGameController } from './RegisterGameController';
import { RegisterGameUseCase } from './RegisterGameUseCase';
import { GameRepository } from "../repositories/GameRepository"

export const registerGameFactory = () =>{
  const gameRepository = new GameRepository();
  const registerGameUseCase = new RegisterGameUseCase(gameRepository);
  const registergameController = new RegisterGameController(registerGameUseCase)
  return registergameController
}