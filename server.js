const app = require("./src/app");
const PORT = process.env.PORT || 7590;

app.listen(PORT, () => {
  console.log(`Oieee! o/ Porta rodando na ${PORT}`);
});
