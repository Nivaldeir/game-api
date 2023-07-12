import { IGameDTO } from "../entities/Game";
import { IGameRepository } from "./IGameRepository";
import prisma from "../../prisma/prismaClient";

export class GameRepository implements IGameRepository{
  async register({ designer, genre, mode, name, platform, releaseData,developer}: IGameDTO): Promise<void> {
    await prisma.game.create({
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