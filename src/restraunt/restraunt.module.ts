import { Module } from "@nestjs/common";
import { ClientsModule, Transport } from "@nestjs/microservices";
import { KAFKA_CONFIG } from "../kafka/kafka.config";
import { RestrauntService } from "./restraunt.service";

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
  providers: [RestrauntService],
})
export class RestaurantModule {}
