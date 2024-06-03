import { NextFunction, Request, Response } from "express";
import { ApiError, ErrorCodes } from "../utils";

export const errorHandler=(err:Error,req:Request,res:Response,next:NextFunction)=>{
    if(err instanceof ApiError){
        return res.status(err.statusCode).json({message:err.message})
    }
    else{
        console.log(err.message)
        return res.status(ErrorCodes.internalServerError).json({message:"Something went wrong"})
    }
}