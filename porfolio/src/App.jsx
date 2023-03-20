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

    const [academia, setAcademia] = React.useState(false)
    const [experiencia, setExperiencia] = React.useState(false)
    const [curiosidade, setCuriosidade] = React.useState(false)
    const [projeto, setProjeto] = React.useState(false)
    const [resumo, setResumo] = React.useState(false)

    function mostrarResumo(){
      setResumo(oldResumo => !oldResumo)
    }
    function mostrarAcademico(){
      setAcademia(oldAcademia => !oldAcademia)
    }
    function mostrarExperiencia(){
      setExperiencia(oldExperiencia => !oldExperiencia)
    }
    function mostrarCuriosidade(){
      setCuriosidade(oldCuriosidade => !oldCuriosidade)
    }
    function mostrarProjeto(){
      setProjeto(oldProjeto => !oldProjeto)
    }

  return (
    <>
      <BarraLateral/>
      <Indice
        handleClickResumo={mostrarResumo}
        handleClickAcademico={mostrarAcademico}
        handleClickExperiencia={mostrarExperiencia}
        handleClickCuriosidade={mostrarCuriosidade}
        handleClickProjeto={mostrarProjeto}
      />
      {resumo&& <h1 id='titulo'>Resumo</h1>}
      {resumo&& <Resumo/>}
      {academia && <h1 id='titulo'>Formação Acadêmica</h1>}
      {academia && <Academico/>}
      {experiencia && <h1 id='titulo'>Experiência Anterior</h1>}
      {experiencia && <Experiencias/>}
      {curiosidade && <h1 id='titulo'>Curiosidades</h1>}
      {curiosidade && <Curiosidades/>}
      {projeto && <h1 id='titulo'>Projetos</h1>}
      {projeto && projetos}
    </>
  )
}

export default App
