// this would be the dependency injection this is used cuz
// nest uses classes so it makes sense to create a global module 
// to which a class can subscribe to instead of each function creating an instance

import { Module } from "@nestjs/common";
import { UserModule } from "src/users/user.module";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { AuthService } from "./auth.service";
import { JwtStrategy } from "./jwt.strategy";
import { AuthController } from "./auth.controller";


@Module({
    imports:[
        UserModule,
        PassportModule,
        JwtModule.register({
            secret:"ANTONIA",
            signOptions:{expiresIn:"1h"}
        })
    ],
    providers:[AuthService,JwtStrategy],
    controllers:[AuthController]
})
export class AuthModule{};