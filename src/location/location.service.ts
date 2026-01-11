import { InjectRedis } from '@nestjs-modules/ioredis';
import { Injectable, NotFoundException } from '@nestjs/common';
import Redis from 'ioredis';

@Injectable()
export class LocationService {
    constructor(
        @InjectRedis()
        private readonly redis: Redis,
    ) {}

    async getCurrentLocation(orderId: string) {
        const key = `order:${orderId}:location`;
        const data = await this.redis.get(key);

        if (!data) throw new NotFoundException('location not found');

        return JSON.parse(data) as Record<string, any>;
    }
}
