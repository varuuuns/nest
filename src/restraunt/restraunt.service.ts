import { Inject, Injectable } from "@nestjs/common";
import { ClientKafka } from "@nestjs/microservices";
import { ORDER_LOCATION_TOPIC } from "src/kafka/kafka.config";

@Injectable()
export class RestrauntService{
    constructor(
        @Inject("KAFKA_PRODUCER")
        private readonly kafka:ClientKafka
    ){}

    async onModuelInit(){
        await this.kafka.connect();

        setInterval(()=>{
            this.publishLocation("ORDER_123");
        },2000);
    }

    publishLocation(orderId:string){
        const payload={
            orderId,
            lat:453.12 + Math.random()/100,
            lon:234.198 + Math.random()/100,
            timstamp:new Date()
        }

        this.kafka.emit(ORDER_LOCATION_TOPIC,{
            key:orderId,
            value:JSON.stringify(payload)
        })

        console.log("location sent to: " ,payload);
        
    }
};