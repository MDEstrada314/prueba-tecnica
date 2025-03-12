const express = require("express");
const { engine } = require("express-handlebars");
const path = require("path");

const app = express();

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "src/templates"));

app.use(express.static("dist"));

app.get("/", (req, res) => {
    res.render("index", { title: "Mi Página con Handlebars" });
});

app.listen(3000, () => {
    console.log("Servidor en http://localhost:3000");
});
