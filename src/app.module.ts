import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './users/user.module';
import { AuthModule } from './auth/auth.module';
import { LocationModule } from './location/location.module';
import { RestaurantModule } from './restraunt/restraunt.module';
import { RedisModule } from './redis/redis.module';

@Module({
    imports: [
        MongooseModule.forRoot(
            'mongodb+srv://varuuuns:whatthefuck@cluster0.veu9z.mongodb.net/nest',
        ),
        RedisModule,
        UserModule,
        AuthModule,
        LocationModule,
        RestaurantModule,
    ],
})
export class AppModule {}
