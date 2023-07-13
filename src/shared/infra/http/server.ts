import "reflect-metadata"
import "../container"
import express, { NextFunction, Request, Response } from "express";
import {routes} from "./routes"
import { CelebrateError } from "celebrate";
const app = express();
const port = 5000;

app.use(express.json())
app.use(routes)
app.use((err:Error, req:Request, res:Response, next: NextFunction)=>{
  if(err instanceof CelebrateError){
    const errorBody = err.details.get("body")
    return res.status(400).json({
      message: errorBody?.details
    })
  }
  return res.status(500).json({
    status: "Error",
    message: `Internal`
  })
})

app.listen(port, () => {
  console.log("Example app listening on port: "+ port);
})