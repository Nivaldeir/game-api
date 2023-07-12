import { IGameDTO } from "../entities/Game";
import { IGameRepository } from "./IGameRepository";
import prismaClient from "../../prisma/prismaClient";

export class GameRepostiry implements IGameRepository{
  async register({ designer, genre, mode, name, platform, releaseData,developer}: IGameDTO): Promise<void> {
    await prismaClient.game.create({
      data:{
        releaseData,
        designer,
        developer,
        genre,
        mode,
        name,
        platform,
      }
    })
  }
}