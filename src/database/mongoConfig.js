const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
require('dotenv-safe').config()
const app = express();
const db = require("../database/mongoConfig");
const projetoFinalRotas = require("../routes/projetofinalRotas");

app.use(cors());
app.use(express.json());
app.use("/artista",projetoFinalRotas );

db.connect;
module.exports = app;




const MONGODB_URI =
  "mongodb+srv://APIProjetofinal:aabbcc@cluster0.erfnu.mongodb.net/ProjetoFinalAndrea?retryWrites=true&w=majority";
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Uhuuu! Banco conectado.");
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  connect,
};
