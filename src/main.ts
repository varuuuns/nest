import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { Transport } from '@nestjs/microservices';
import { KAFKA_CONFIG } from './kafka/kafka.config';
import { ResponseInterceptor } from './interceptors/response.interceptors';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    app.useGlobalInterceptors(new ResponseInterceptor());

    app.useGlobalPipes(
        new ValidationPipe({
            whitelist: true,
            forbidNonWhitelisted: true,
            transform: true,
        }),
    );

    app.connectMicroservice({
        transport: Transport.KAFKA,
        options: {
            client: KAFKA_CONFIG,
            consumer: {
                groupId: 'user-location-consumer',
            },
        },
    });

    await app.startAllMicroservices();
    await app.listen(3000);
}
void bootstrap();
