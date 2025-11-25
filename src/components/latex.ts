import "../style.css"

const renderLatex = () => {
    const container = document.createElement("div");
    const url = '../../public/Propiedades_a_tener_en_cuenta.pdf'
    container.innerHTML = `

<style>
    #pdf-container {
        width: 100%;
        height: 90vh;
        display: flex;
        justify-content: center;
        padding: 10px;
}

    embed {
        width: 80%;
        height: 100%;
        border: 1px solid #ccc;
        border-radius: 8px;
}
</style>

    <section id="pdf-container">
        <embed src=${url} type="application/pdf" />
    </section>
    `
    return container;
}

document.querySelector<HTMLDivElement>("#guia")!.innerHTML = ` 
    <h1>Propiedades a tener en cuenta</h1>
    <nav>
        <a href="../../index.html"> Math Utilities </a>
        <a href="../../public/Propiedades_a_tener_en_cuenta.pdf" download class="download-btn">Descargar PDF</a>
    </nav>
`;

const guia = document.querySelector<HTMLDivElement>("#guia")!;

guia.appendChild(renderLatex());