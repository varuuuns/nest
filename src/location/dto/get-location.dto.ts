import { IsString } from 'class-validator';

export class GetLocationParamDto {
    @IsString()
    orderId: string;
}