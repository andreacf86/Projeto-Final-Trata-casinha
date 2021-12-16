require("dotenv-safe").config() //nao precisa de variável
const express = require("express"); //faz a ligação  http crud
const cors = require("cors"); //não dar conflito na api
const db = require("./database/mongoConfig")
const app = express(); //ele chama o express

app.use(express.json()); //substitui o bodyparse
app.use(cors()); //usar
const projetoRoutes = require("./routes/projetofinalRotas");

app.use("/", projetoRoutes);


db.connect();
module.exports = app;
