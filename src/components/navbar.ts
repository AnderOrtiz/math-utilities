export function Navbar() {
    const container = document.createElement("div");
    container.innerHTML = `<nav>
    <a href="https://www.geogebra.org/classic?lang=es" target="_blank">Geogebra</a>
    <a href="https://github.com/AnderOrtiz/math-utilities?tab=readme-ov-file" c>Git</a>
    <a href="../../guia.html" target="_blank">Guía</a>
    </nav>`

    return container
}