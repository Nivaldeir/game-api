import { injectable,inject } from "tsyringe";
import { IGameDTO } from "../../games/infra/entities/Game";
import { IGameRepository } from "../../games/infra/repositories/IGameRepository";

@injectable()
export class RegisterGameUseCase{
  constructor(
    @inject('GameRepository')
    private gameRepository: IGameRepository
    ){

  }
  async execute({designer,developer,genre,mode,name,platform,releaseData}:IGameDTO): Promise<void>{
    await this.gameRepository.register({designer,developer,genre,mode,name,platform,releaseData})
  }
}