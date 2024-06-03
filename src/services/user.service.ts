import { IUser } from "../interfaces";
import { User } from "../models";
import bcrypt from "bcrypt"
import { ApiError, ApiResponse, ErrorCodes, SuccessCodes } from "../utils";

export class UserService{
    async getAllUsers(){
        const data = await User.findAll()
        if(data.length==0){
            throw new ApiError(ErrorCodes.notFound, "User not found")
        }
        return new ApiResponse(SuccessCodes.ok,data,"Users fetched successfully")
    }

    async createUser(userdata:IUser){
        userdata.password = await bcrypt.hash(userdata.password,10)
        const data = await User.create({
            name:userdata.name,
            email:userdata.email,
            password:userdata.password
        })
        return new ApiResponse(SuccessCodes.created,data,"User registered successfully!")
    }

    async updateUser(userId:number,userdata:IUser){
        // console.log(userId)
        const data = await User.update(userdata, {where:{id: userId}});
        // console.log(data);
        
        return new ApiResponse(SuccessCodes.ok,data,"User updated successfully")
    }
    async deleteUser(userId:number){
        // console.log(userId)
        const data = await User.destroy({where:{id: userId}});
        // console.log(data);
        
        return new ApiResponse(SuccessCodes.ok,data,"User deleted successfully")
    }
}