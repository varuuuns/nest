import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { OrderLocationEvent } from 'src/kafka/events/order_location.event';
import { ORDER_LOCATION_TOPIC } from 'src/kafka/kafka.config';

@Injectable()
export class RestrauntPublisher {
    constructor(
        @Inject('KAFKA_PRODUCER')
        private readonly kafka: ClientKafka,
    ) {}

    publishLocation(event: OrderLocationEvent) {
        this.kafka.emit(ORDER_LOCATION_TOPIC, {
            key: event.orderId,
            value: JSON.stringify(event),
        });
    }
}
