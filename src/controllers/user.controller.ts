import { NextFunction, Request, Response } from "express";
import { UserService } from "../services";
import { IUser } from "../interfaces";

const service = new UserService()

export class UserController{
    async getAllUsers(req:Request,res:Response,next:NextFunction){
        try {
            const response = await service.getAllUsers()
            res.status(response.statusCode).json(response)
        } catch (error) {
            next(error)
        }
    }
    async createUser(req:Request,res:Response,next:NextFunction){
        try {
            const userdata :IUser=req.body
            const response = await service.createUser(userdata)
            res.status(response.statusCode).json(response)
        } catch (error) {
            next(error)
        }
    }
    async updateUser(req:Request,res:Response,next:NextFunction){
        try {
            const{id}=req.params
            const userdata :IUser=req.body
            const response = await service.updateUser(Number(id),userdata)
            // console.log(response.data);
            
            res.status(response.statusCode).json(response)
        } catch (error) {
            next(error)
        }
    }
    async deleteUser(req:Request,res:Response,next:NextFunction){
        try {
            const{id}=req.params
            const response = await service.deleteUser(Number(id))
            // console.log(response.data);
            
            res.status(response.statusCode).json(response)
        } catch (error) {
            next(error)
        }
    }
}