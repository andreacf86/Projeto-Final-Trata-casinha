const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, //torna obrigatorio
  },
  profissao: {
    type: String,
    required: true, //ele precisa disso, é um dado obrigatório
  },
  idade: {
    type: Number,
    required: true,
  },
  timestamps: Boolean,
  bairro: {
    type: String,
    required: true,
  },

  telefone: {
    type: Number,
  },
  telhado: {
    type: Boolean,
    required: true,
  },
  reformaBanheiro: {
    type: Boolean,
    required: true,
  },
  criadoEm: {
    type: Date,
    default: new Date(),
  },
  id: mongoose.Schema.Types.ObjectId,
});

const Users = mongoose.model("User", usersSchema);

module.exports = Users;
