import { randomUUID } from "crypto";

export interface IGameDTO{
  name: string;
  designer: string;
  genre: string;
  platform: string;
  developer: string;
  releaseData: string;
  mode: string;
}

export class Game {
  id?: string;
  name!: string;
  designer!: string;
  genre!: string;
  platform!: string;
  releaseData!: string;
  mode!: string;
  createdAt!: Date;
  updatedAt!: Date;

  constructor(){
    if(!this.id){
      this.id == randomUUID();
    }
  }
}