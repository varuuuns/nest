import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import type { OrderLocationEvent } from 'src/kafka/events/order_location.event';
import { RestrauntPublisher } from './restraunt.publisher';
import { calculateDirection } from './direction.util';
import { PublishLocationDto } from 'src/kafka/dto/publish-location.dto';

@Controller('restaurant')
export class RestaurantController {
    constructor(private readonly publisher: RestrauntPublisher) {}

    @Post('location')
    @HttpCode(202)
    publishLocation(@Body() dto:PublishLocationDto) {
        const event: OrderLocationEvent = {
            orderId: dto.orderId,
            lat: dto.lat,
            lng: dto.lng,
            direction: calculateDirection(dto.lat, dto.lng),
            timestamp: Date.now(),
        };

        return this.publisher.publishLocation(event);
    }
}
