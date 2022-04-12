const conexao = require("../infraestrutura/conexao");

class Usuarios {
  criar(usuario, res) {
    const usuarioEhValido = usuario.nome.length >= 5;

    const validacoes = [
      {
        nome: "usuario",
        valido: usuarioEhValido,
        mensagem: "Nome do cliente de ter pelo menos 5 caratcteres",
      },
    ];
    const erros = validacoes.filter((campo) => !campo.valido);
    const existemErros = erros.length;

    if (existemErros) {
      res.status(400).json(erros);
    } else {
      const usuarios = { ...usuario };

      const sql = "INSERT INTO usuarios SET ?";

      conexao.query(sql, usuarios, (erro, resultados) => {
        if (erro) {
          res.status(400).json(erro);
        } else {
          res.status(201).json(resultados);
        }
      });
    }
  }
}

module.exports = new Usuarios();
