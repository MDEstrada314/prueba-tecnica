document.addEventListener("DOMContentLoaded", function () {
    const template = document.getElementById("menu-template").innerHTML;
    const compiledTemplate = Handlebars.compile(template);
    const menuData = { 
        items: [
            { text: "Inicio", href: "/" },
            { text: "Noticias", href: "/noticias" },
            { text: "Contacto", href: "/contacto" }
        ]
    };
    
    document.getElementById("menu-container").innerHTML = compiledTemplate(menuData);
    
});

console.log("menu.js cargado correctamente");