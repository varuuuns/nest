import { Body, Controller, Post } from '@nestjs/common';
import type { OrderLocationEvent } from 'src/kafka/events/order_location.event';
import { RestrauntPublisher } from './restraunt.publisher';
import { calculateDirection } from './direction.util';

@Controller('restaurant')
export class RestaurantController {
    constructor(private readonly publisher: RestrauntPublisher) {}

    @Post('location')
    publishLocation(
        @Body() body: { orderId: string; lat: number; lng: number },
    ) {
        const event: OrderLocationEvent = {
            orderId: body.orderId,
            lat: body.lat,
            lng: body.lng,
            direction: calculateDirection(body.lat, body.lng),
            timestamp: Date.now(),
        };

        return this.publisher.publishLocation(event);
    }
}
