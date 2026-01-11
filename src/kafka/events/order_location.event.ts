export type Direction = 'NORTH' | 'SOUTH' | 'EAST' | 'WEST';
export interface OrderLocationEvent {
    orderId: string;
    lat: number;
    lng: number;
    timestamp: number;
    direction: Direction;
}
