export function findRoots(coeffs: number[], xMin: number, xMax: number): number[] {
    const valores: number[] = [];

    for (let x = xMin; x <= xMax; x++) {
        // Calcula el valor del polinomio usando los coeficientes
        // coeffs[0]*x^n + coeffs[1]*x^(n-1) + ...
        let resolv = 0;
        const n = coeffs.length - 1;

        for (let i = 0; i < coeffs.length; i++) {
            resolv += coeffs[i] * Math.pow(x, n - i);
        }

        if (resolv === 0) {
            valores.push(x);
        }

        console.log(`${x} => ${resolv}`);
    }

    return valores;
}