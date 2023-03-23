import React from 'react'

export default function Indice(props){
    return(
        <section id='indice'>
            <h1 id='titulo--indice' className='center'>Índice</h1>
            <ol>
                <h2>
                    <a onClick={props.handleClickResumo}>
                        <li>Resumo</li>
                    </a>
                </h2>
                <h2>
                    <a onClick={props.handleClickAcademico}>
                        <li>Formação Acadêmica</li>
                    </a>
                    <a onClick={props.handleClickExperiencia}>
                        <li>Experiência Anterior</li>
                    </a>
                    <a onClick={props.handleClickCuriosidade}>
                        <li>Curiosidades</li>
                    </a>
                    <a onClick={props.handleClickProjeto}>
                        <li>Projetos</li>
                    </a>
                </h2>
            </ol>
            <hr id='hr--indice'/>
        </section>
    )
}