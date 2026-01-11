import { IsNumber, IsString } from 'class-validator';

export class PublishLocationDto {
    @IsString()
    orderId: string;

    @IsNumber()
    lat: number;

    @IsNumber()
    lng: number;
}