// this is the traffic controller

import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller()
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post("login")
    login(@Body() body) {
        return this.authService.login(body.email, body.password);
    }
}