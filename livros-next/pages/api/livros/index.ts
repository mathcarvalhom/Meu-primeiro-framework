import { NextApiRequest, NextApiResponse } from "next"
import { controleLivro } from "../../../classes/controle/ControleLivro"

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    const livros = controleLivro.obterLivros()
    res.status(200).json(livros)
  } else if (req.method === "POST") {
    const novoLivro = req.body
    controleLivro.incluir(novoLivro)
    res.status(200).json({ message: "Livro incluído com sucesso" })
  } else {
    res.status(405).json({ message: "Método não permitido" })
  }
}
