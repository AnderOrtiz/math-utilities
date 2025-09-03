import { findRoots } from "../utils/synthetic";

export function FindRootsForm() {
    const container = document.createElement("div");

    container.innerHTML = `
        <h2>División sintética</h2>
        <input id="coeffs" type="text" placeholder="Coeficientes (ej: 1,-2,0,1)"/>
        <input id="xmin" type="number" placeholder="x mínimo" value="-10"/>
        <input id="xmax" type="number" placeholder="x máximo" value="10"/>
        <select id="step">
            <option value="1">1</option>
            <option value="0.1">0.1</option>
            <option value="0.01">0.01</option>
        </select>
        <button id="find">Buscar raíces</button>
        <p id="result"></p>
    `;

    const btn = container.querySelector<HTMLButtonElement>("#find")!;
    const resultEl = container.querySelector<HTMLParagraphElement>("#result")!;

    btn.addEventListener("click", () => {
        const coeffsInput = (container.querySelector("#coeffs") as HTMLInputElement).value,
        coeffs = coeffsInput.split(",").map(x => parseFloat(x.trim())),

        xMin = parseInt((container.querySelector("#xmin") as HTMLInputElement).value),
        xMax = parseInt((container.querySelector("#xmax") as HTMLInputElement).value),

        step = parseFloat((container.querySelector("#step") as HTMLInputElement).value),

        roots = findRoots(coeffs, xMin, xMax, step);

        resultEl.textContent = roots.length > 0
            ? `Raíces encontradas: [${roots.join(", ")}]`
            : "No se encontraron raíces en el rango.";
    });

    return container;
}
