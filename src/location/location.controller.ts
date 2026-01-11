import { Controller, Get, Param } from "@nestjs/common";
import { LocationService } from "./location.service";

@Controller("location")
export class LocationController{
    constructor(
        private readonly locationService:LocationService
    ){}

    @Get(":orderId")
    getLocation(@Param("orderId") orderId:string){
        return this.locationService.getCurrentLocation(orderId);
    }
};