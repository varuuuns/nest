import { InjectRedis } from "@nestjs-modules/ioredis";
import { Injectable } from "@nestjs/common";
import { MessagePattern, Payload } from "@nestjs/microservices";
import Redis from "ioredis";
import { OrderLocationEvent } from "src/kafka/events/order_location.event";
import { ORDER_LOCATION_TOPIC } from "src/kafka/kafka.config";

@Injectable()
export class LocationConsumer{
    constructor(
        @InjectRedis()
        private readonly redis:Redis
    ){}

    @MessagePattern(ORDER_LOCATION_TOPIC)
    async handleLocationUpdate(@Payload() message:any){
        const val: OrderLocationEvent = JSON.parse(message.value.toString());        
        const key=`order:${val.orderId}:location`;

        /* Redis implementation */
        const TTL_SECONDS=3600;

        await this.redis.set(
            key,
            JSON.stringify({
                lat:val.lat,
                lng:val.lng,
                timestamp:val.timestamp
            }),
            "EX",
            TTL_SECONDS
        )
    }
};