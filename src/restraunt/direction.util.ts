export function calculateDirection(lat: number, lng: number) {
    if (lat >= 0 && lng >= 0) return 'NORTH';
    if (lat < 0 && lng >= 0) return 'EAST';
    if (lat < 0 && lng < 0) return 'SOUTH';
    return 'WEST';
}
