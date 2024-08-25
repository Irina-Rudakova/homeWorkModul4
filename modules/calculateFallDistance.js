export function calculateFallDistance(t){
    const g = 9.8;
    const d = (1/2)*g*t^2;
    return d;
}

alert(calculateFallDistance(25));