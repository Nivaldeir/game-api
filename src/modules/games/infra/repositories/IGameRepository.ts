import { IGameDTO } from "../entities/Game";

export interface IGameRepository{
  register(game: IGameDTO): Promise<void>;
}