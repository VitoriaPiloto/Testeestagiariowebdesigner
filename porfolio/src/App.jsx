import React from 'react'
import BarraLateral from './components/BarraLateral'
import Projetos from './components/Projetos'
import Curiosidades from './components/Curiosidades'
import Academico from './components/Academico'
import Experiencias from './components/Experiencias'
import Resumo from './components/Resumo'
import Indice from './components/Indice'
import data from './data'
import './index.css'

function App() {

  const projetos = data.map(item=>
      <Projetos
        key = {item.id}
        {...item}
      />
    )
  return (
    <>
      <BarraLateral/>
      <Indice/>
      <h1 id='titulo'>Resumo</h1>
      <Resumo/>
      <h1 id='titulo'>Formação Acadêmica</h1>
      <Academico/>
      <h1 id='titulo'>Experiência Anterior</h1>
      <Experiencias/>
      <h1 id='titulo'>Curiosidades</h1>
      <Curiosidades/>
      <h1 id='titulo'>Projetos</h1>
      {projetos}
    </>
  )
}

export default App
