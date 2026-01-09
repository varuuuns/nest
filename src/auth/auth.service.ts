// so this would be the middleware which is the business logic

import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UserService } from "src/users/user.service";
import * as bcrypt from "bcrypt";

@Injectable()
export class AuthService{
    constructor(
        private jwtService:JwtService,
        private userService:UserService
    ){}

    async login(email:string, password:string){
        const user=await this.userService.findByEmail(email);
        if(!user) throw new UnauthorizedException("please signup first!");

        const match=await bcrypt.compare(password,user.password);
        if(!match) throw new UnauthorizedException("invalid password!");

        const payload={sub:user._id, email:user.email};

        return {
            accessToken:this.jwtService.sign(payload)
        }
    }
};