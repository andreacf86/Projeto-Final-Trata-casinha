const Users = require("../models/TrataCasinhaSchema");
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
    const bairroEncontrado = await Users.find({
      bairro: new RegExp(req.query.bairro, "i"), //ignorar case
    });
    //bairro era a chave bairro(meu schema): (vai ter um objeto e um valor) Uma expressao regular (super filtro)e a requisição do front req.query.bairro, ignorar o  case(maiuscula e minuscula)
    res.status(200).json(bairroEncontrado);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getTelhado = async (req, res) => {
  try {
    const usersTelhado = await Users.find({
      telhado: true,
    });

    res.status(200).json({
      usersTelhado,
      message: "Usuários que tem problemas de telhado",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getReforma = async (req, res) => {
  try {
    const usersReforma = await Users.find({
      reformaBanheiro: true, //
    });

    res.status(200).json({
      usersReforma,
      message: "Usuários que precisam de reforma no banheiro",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const createUser = async (req, res) => {
  try {
    const user = new Users({
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

const updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const findUser = await Users.findById(id);

    if (findUser) {
      findUser.name = req.body.name || findUser.name;
      findUser.profissao = req.body.profissao || findUser.profissao;
      findUser.idade = req.body.idade || findUser.idade;
      findUser.bairro = req.body.bairro || findUser.bairro;
      findUser.telefone = req.body.telefone || findUser.telefone;
      findUser.telhado = req.body.telhado || findUser.telhado;
      findUser.reformaBanheiro =
        req.body.reformabanheiro || findUser.reformabanheiro;
    }

    const savedUser = await findUser.save();

    res.status(200).json({
      savedUser,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const findUser = await Users.findById(id);

    await findUser.delete();

    res.status(200).json({
      message: `Usuário ${findUser.name} deletado com sucesso!`,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
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
  updateUser,
  deleteUser,
};
