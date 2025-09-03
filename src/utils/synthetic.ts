export function findRoots( coeffs: number[], xMin: number, xMax: number, step: number): number[] {
    const valores: number[] = [];

    for (let x = xMin; x <= xMax; x = parseFloat((x + step).toFixed(10))) {
        // Calcula el valor del polinomio
        let resolv = 0;
        const n = coeffs.length - 1;

        for (let i = 0; i < coeffs.length; i++) {
            resolv += coeffs[i] * Math.pow(x, n - i);
        }

        // Usamos tolerancia en vez de resolv === 0
        if (Math.abs(resolv) < 1e-6) {
            valores.push(parseFloat(x.toFixed(5))); // guardamos con 5 decimales
        }

        console.log(`${x.toFixed(2)} => ${resolv}`);
    }
//1,-2,-5,6
    return valores;
}