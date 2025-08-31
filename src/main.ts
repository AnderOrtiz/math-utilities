import "./style.css"
import { QuadraticForm } from "./components/QuadraticForm";
import { FindRootsForm } from "./components/SyntheticForm";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <h1>Math Utilities</h1>
`;

const app = document.querySelector<HTMLDivElement>("#app")!;
app.appendChild(QuadraticForm());
app.appendChild(FindRootsForm());
