const Users = require("../models/projetoFinalSchema");
const mongoose = require("mongoose");

const getAll = async (req, res) => {
  try {
    const users = await Users.find();
    res.status(200).json({
      message: "Usuário encontrado com sucesso",
      users,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getBairro = async (req, res) => {
  try {
    const bairroEncontrado = Users.bairro.toString().includes(bairroEncontrado);
    const users = await Users.query.bairro;
    res.status(200).json(bairroEncontrado);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getTelhado = async (req, res) => {
  try {
    const usersTelhado = await Users.query.telhado;
    if (usersTelhado == true) {
      res.status(200).json({
        usersTelhado,
        message: "Usuários que tem problemas de telhado",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getReforma = async (req, res) => {
  try {
    const usersReforma = await Users.query.reformaBanheiro;
    if (usersReforma == true) {
      res.status(200).json({
        usersReforma,
        message: "Usuários que precisam de reforma no banheiro",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const createUser = async (req, res) => {
  try {
    const user = new Users ({
      name: req.body.name,
      profissao: req.body.profissao,
      idade: req.body.idade,
      bairro: req.body.bairro,
      telefone: req.body.telefone,
      telhado: req.body.telhado,
      reformaBanheiro: req.body.reformaBanheiro,
      criadoEm: req.body.criadoEm,
      _id: new mongoose.Types.ObjectId(),
    });

    const userSave = await user.save();
    res.status(200).json({
      user: userSave,
      message: "Olá! Usuário adicionado com sucesso",
    });
  } catch (error) {
    res.status(500).json({
      mensagem: error.message, //message,
    });
  }
};

//const updateUser 

module.exports = {
  getAll,
  getBairro,
  getTelhado,
  createUser,
  getReforma,
};
