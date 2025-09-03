export function Navbar() {
    const container = document.createElement("div");
    container.innerHTML = `<nav>
    <a href="https://www.geogebra.org/classic?lang=es" target="_blank">Geogebra</a>
    <a href="https://github.com/AnderOrtiz/math-utilities?tab=readme-ov-file" target="_blank">Git</a>
    </nav>`

    return container
}