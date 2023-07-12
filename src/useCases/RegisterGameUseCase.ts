import { IGameDTO } from "../entities/Game";
import { IGameRepository } from "../repositories/IGameRepository";

export class RegisterGameUseCase{
  constructor(private gameRepository: IGameRepository){

  }
  async execute({designer,developer,genre,mode,name,platform,releaseData}:IGameDTO): Promise<void>{
    await this.gameRepository.register({designer,developer,genre,mode,name,platform,releaseData})
  }
}