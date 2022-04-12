const Usuario = require("../models/usuarios");

module.exports = (app) => {
  app.get("/usuarios", (req, res) => {
    Usuario.lista(res);
  });

  app.get("/usuarios/id", (req, res) => {
    const id = parseInt(req.params.id);

    Usuario.buscarPorID(id, res);
  });

  app.post("/usuarios", (req, res) => {
    const usuarios = req.body;

    Usuario.adiciona(usuarios, res);
  });
};
