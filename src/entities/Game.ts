import { randomUUID } from "crypto";



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