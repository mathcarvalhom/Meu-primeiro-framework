import React from "react"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import "./App.css"

import "./LivroLista.js"

import LivroLista from "./LivroLista"
import LivroDados from "./LivroDados"

function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link to="/" className="nav-link">
                Catálogo
              </Link>
            </li>
            <li className="nav-item">
              <Link to="dados" className="nav-link">
                Novo
              </Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<LivroLista />} />
          <Route path="dados" element={<LivroDados />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  )
}

export default App
