import { quadraticFormula } from "../utils/quadratic";

export function QuadraticForm() {
    const container = document.createElement("div");

    container.innerHTML = `
    <h2>Fórmula General</h2>
    <input id="a" type="number" placeholder="a"/>
    <input id="b" type="number" placeholder="b"/>
    <input id="c" type="number" placeholder="c"/>
    <button id="solve">Resolver</button>
    <p id="result"></p>`;

    const btn = container.querySelector<HTMLButtonElement>("#solve")!;
    const resultEl = container.querySelector<HTMLParagraphElement>("#result")!;

    btn.addEventListener("click", () => {
        const a = parseFloat((container.querySelector("#a") as HTMLInputElement).value);
        const b = parseFloat((container.querySelector("#b") as HTMLInputElement).value);
        const c = parseFloat((container.querySelector("#c") as HTMLInputElement).value);

        resultEl.textContent = quadraticFormula(a, b, c);
    });

    return container;
}
