import { Injectable, NotFoundException } from "@nestjs/common";
import { Model } from "mongoose";
import { User } from "./schema/user.schema";

@Injectable()
export class UserService{
    constructor(
        private readonly userModel:Model<User>
    ){}
    
    async create(dto) {
        return this.userModel.create(dto);
    }

    async findAll(page:number=1,limit:number=10){
        return await this.userModel
            .find()
            .skip((page-1)*limit)
            .limit(limit);
    }

    async findOne(id:string){
        const user=await this.userModel.findById(id);

        if(!user) throw new NotFoundException("user not found");
        return user;
    }

    async update(id:string, dto){
        const user=await this.userModel.findByIdAndUpdate(id, dto, {unique:true});
        
        if(!user) throw new NotFoundException("uset not found");
        return user;
    }

    async remove(id:string){
        const user=await this.userModel.findByIdAndUpdate(id);

        if(!user) throw new NotFoundException("user not found");
        return user;
    }
};