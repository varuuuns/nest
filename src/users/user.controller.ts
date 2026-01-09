import { Body, Controller, Delete, Get, Param, Patch, Post, Query, UseGuards } from "@nestjs/common";
import { UserService } from "./user.service";
import { AuthGuard } from "@nestjs/passport";
import { UpdateUserDto } from "./dto/update-user.dto";
import { CreateUserDto } from "./dto/create-user.dto";

@UseGuards(AuthGuard("jwt"))
@Controller("user")
export class UserController{
    constructor(
        private readonly userService:UserService
    ){}

    @Post()
    create(@Body() dto:CreateUserDto){
        return this.userService.create(dto);
    }

    @Get()
    findAll(@Query("page") page:number, @Query("limit") limit:number){
        return this.userService.findAll(page,limit);
    }

    @Get(":id")
    findOne(@Param("id") id:string){
        return this.userService.findOne(id);
    }

    @Patch(":id")
    update(@Param("id") id:string,@Body() dto:UpdateUserDto){
        return this.userService.update(id,dto);
    }

    @Delete(":id")
    remove(@Param("id") id:string){
        return this.userService.remove(id);
    }
};