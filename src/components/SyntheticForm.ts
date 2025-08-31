import { findRoots } from "../utils/synthetic";

export function FindRootsForm() {
    const container = document.createElement("div");

    container.innerHTML = `
        <h2>División sintética</h2>
        <input id="coeffs" type="text" placeholder="Coeficientes (ej: 1,-2,0,1)"/>
        <input id="xmin" type="number" placeholder="x mínimo" value="-10"/>
        <input id="xmax" type="number" placeholder="x máximo" value="10"/>
        <button id="find">Buscar raíces</button>
        <p id="result"></p>
    `;

    const btn = container.querySelector<HTMLButtonElement>("#find")!;
    const resultEl = container.querySelector<HTMLParagraphElement>("#result")!;

    btn.addEventListener("click", () => {
        const coeffsInput = (container.querySelector("#coeffs") as HTMLInputElement).value;
        const coeffs = coeffsInput.split(",").map(x => parseFloat(x.trim()));

        const xMin = parseInt((container.querySelector("#xmin") as HTMLInputElement).value);
        const xMax = parseInt((container.querySelector("#xmax") as HTMLInputElement).value);

        const roots = findRoots(coeffs, xMin, xMax);

        resultEl.textContent = roots.length > 0
            ? `Raíces encontradas: [${roots.join(", ")}]`
            : "No se encontraron raíces en el rango.";
    });

    return container;
}
