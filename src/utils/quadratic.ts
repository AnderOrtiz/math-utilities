export function quadraticFormula(a: number, b: number, c: number): string {
    if (a === 0) return "No es una ecuación cuadrática";

    const discriminant = b * b - 4 * a * c;

    if (discriminant < 0) {
        return "No hay soluciones reales";
    } else if (discriminant === 0) {
        const x = -b / (2 * a);
        return `Una solución: x = ${x}`;
    } else {
        const x1 = (-b + Math.sqrt(discriminant)) / (2 * a),
             x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        return `Dos soluciones: x1 = ${x1.toFixed(2)}, x2 = ${x2.toFixed(2)}`;
    }
}
