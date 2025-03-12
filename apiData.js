const fs = require("fs");
const path = require("path");


// funcion centralizada para llamar la API
function fetchData() {
    const filePath = path.join(__dirname, "data/test.json");

    try {
        const jsonData = fs.readFileSync(filePath, "utf-8");
        return JSON.parse(jsonData);
    } catch (error) {
        console.error("Error al cargar los datos:", error);
        return {}; // Retorna un objeto vacío en caso de error
    }
}

module.exports = fetchData;