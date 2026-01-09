import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { UserModule } from "./users/user.module";
import { AuthModule } from "./auth/auth.module";

@Module({
    imports: [
        MongooseModule.forRoot("mongodb+srv://varuuuns:whatthefuck@cluster0.veu9z.mongodb.net/nest"),
        UserModule,
        AuthModule
    ],
})
export class AppModule {}