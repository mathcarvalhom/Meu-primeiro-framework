import { useState, useEffect } from "react"
import ControleLivro from "./controle/ControleLivros"
import ControleEditora from "./controle/ControleEditora"
import "./App.css"

const controleLivros = new ControleLivro()
const controleEditora = new ControleEditora()

const LinhaLivro = (props) => {
  const { livro, excluir } = props
  const nomeEditora = controleEditora.getNomeEditora

  return (
    <tr>
      <td>
        <p>{livro.titulo}</p>
        <button
          type="button"
          class="btn btn-danger"
          onClick={() => excluir(livro.codigo)}
        >
          Excluir
        </button>
      </td>
      <td>{livro.resumo}</td>
      <td>{nomeEditora(livro.codEditora)}</td>
      <td>
        <ul>
          {livro.autores.map((autor, index) => (
            <li key={index}>{autor}</li>
          ))}
        </ul>
      </td>
    </tr>
  )
}

const LivroLista = () => {
  const [livros, setLivros] = useState([])
  const [carregado, setCarregado] = useState(false)

  useEffect(() => {
    setLivros(controleLivros.obterLivros())
    setCarregado(true)
  }, [carregado])

  const excluir = (codigo) => {
    controleLivros.excluir(codigo)
    setCarregado(false)
  }

  return (
    <main class="container">
      <h1>Catálogo de Livros</h1>
      <table className="table table-hover">
        <thead className="table-dark">
          <tr>
            <th>Título</th>
            <th>Resumo</th>
            <th>Editora</th>
            <th>Autores</th>
          </tr>
        </thead>
        <tbody>
          {livros.map((livro) => (
            <LinhaLivro
              key={livro.codigo}
              livro={livro}
              excluir={excluir}
              getNomeEditora={controleEditora.getNomeEditora}
            />
          ))}
        </tbody>
      </table>
    </main>
  )
}

export default LivroLista
