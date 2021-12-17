require("dotenv-safe").config(); //nao precisa de variável
const express = require("express"); //faz a ligação  http crud
const cors = require("cors"); //não dar conflito na api
const db = require("./database/mongoConfig");
const app = express(); //ele chama o express
const projetoRoutes = require("./routes/projetofinalRotas");
db.connect();
app.use(express.json()); //substitui o bodyparse
app.use(cors()); //usar


app.use("/", projetoRoutes);

module.exports = app;
