import { Controller, Get, Param } from '@nestjs/common';
import { LocationService } from './location.service';
import { GetLocationParamDto } from './dto/get-location.dto';

@Controller('location')
export class LocationController {
    constructor(private readonly locationService: LocationService) {}

    @Get(':orderId')
    getLocation(@Param() params: GetLocationParamDto) {
        return this.locationService.getCurrentLocation(params.orderId);
    }
}
