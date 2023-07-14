import { injectable,inject } from "tsyringe";
import { IGameDTO } from "../../infra/entities/Game";
import { IGameRepository } from "../../infra/repositories/IGameRepository";

@injectable()
export class RegisterGameUseCase{
  constructor(
    @inject('GameRepository')
    private readonly gameRepository: IGameRepository
    ){

  }
  async execute({designer,developer,genre,mode,name,platform,releaseData}:IGameDTO): Promise<void>{
    if(releaseData === "1980"){
      throw new Error('Release data not authorized')
    }
    await this.gameRepository.register({designer,developer,genre,mode,name,platform,releaseData})
  }
}