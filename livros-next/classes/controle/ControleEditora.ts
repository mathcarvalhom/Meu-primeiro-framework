import Editora from "../modelo/Editora"

const editoras: Array<Editora> = [
  {
    codEditora: 1,
    nome: "Alta Books",
  },
  {
    codEditora: 2,
    nome: "Pearson",
  },
  {
    codEditora: 3,
    nome: "Addison Wesley",
  },
]

export default class ControleEditora {
  public getNomeEditora(codEditora: number) {
    const resultados = editoras.filter(
      (editora) => editora.codEditora === codEditora
    )
    if (resultados.length === 0) return "Editora não encontrada"
    return resultados[0].nome
  }

  public getEditoras() {
    return editoras
  }
}
