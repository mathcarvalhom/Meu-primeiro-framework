import { NextApiRequest, NextApiResponse } from "next"
import { controleEditora } from "../../../classes/controle/ControleEditora"

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    const editoras = controleEditora.getEditoras()
    res.status(200).json(editoras)
  } else {
    res.status(405).json({ message: "Método não permitido" })
  }
}
