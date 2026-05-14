import { useState, useEffect } from "react";
import "./App.css"

function App(){
  const [cursos, setCursos] = useState([])

  const url_cursos = "https://my-json-server.typicode.com/N1colasAntunes/fake-api/cursos"

  const carregarCursos = async ()=>{
    try{
      const resposta = await fetch(url_cursos)
      const dados = await resposta.json()
      setCursos(dados)
    } catch(erro){
      console.error("Erro ao carregar os dados: ", erro)
    }
  }

  useEffect(()=>{carregarCursos()}, [])

  return(
    <div className="container">
      <h1>Lista de Cursos</h1>

      {cursos.map((curso)=>(
        <div className="card">
          <h2>{curso.nome}</h2>
          <p>Id:{curso.id}</p>
          <p>Carga horária: {curso["carga-goraria"]}</p>

          <div className="disciplinas">
            {curso.disciplinas.map((disc)=>(
              <span className="disciplina">{disc}</span>
            ))}
        </div>
    </div>
    ))}
    </div>
  )
}

export default App