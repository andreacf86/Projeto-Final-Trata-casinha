const mongoose = require("mongoose");


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
