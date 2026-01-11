import { Module } from '@nestjs/common';
import { LocationConsumer } from './location.consumer';
import { LocationService } from './location.service';
import { LocationController } from './location.controller';

@Module({
    providers: [LocationConsumer, LocationService],
    controllers: [LocationController],
})
export class LocationModule {}
