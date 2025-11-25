export const renderLatex = () => {
    const container = document.createElement("div");
    //const url = 'https://univoedu-my.sharepoint.com/:b:/g/personal/u20250346_univo_edu_sv/EeHKJoaSGUtJg6LYRr9-L8cB1XtUqjQ4Dim34KcKCxyPHA?e=vkzRxe'
    const url = '../../public/Propiedades_a_tener_en_cuenta.pdf'
    container.innerHTML = `
    <embed 
        src=${url} 
        type="application/pdf" 
        width="100%" 
        height="600px" 
    />`



    return container;
}