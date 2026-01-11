import { Module } from "@nestjs/common";
import { ClientsModule, Transport } from "@nestjs/microservices";
import { KAFKA_CONFIG } from "../kafka/kafka.config";
import { RestrauntPublisher } from "./restraunt.publisher";
import { RestaurantController } from "./restraunt.controller";

@Module({
    imports: [
        ClientsModule.register([
        {
            name: "KAFKA_PRODUCER",
            transport: Transport.KAFKA,
            options: {
                client: KAFKA_CONFIG,
                producerOnlyMode: true,
            },
        },
        ]),
    ],
    providers: [RestrauntPublisher],
    controllers:[RestaurantController]
})
export class RestaurantModule {}