import React from 'react'

export default function Indice(){
    return(
        <section className="center" id='indice'>
            <h1 id='titulo--indice'>Índice</h1>
            <ol>
                <h2>
                    <a href='#resumo'>
                        <li>Resumo</li>
                    </a>
                </h2>
                <h2>
                    <a href="#academico">
                        <li>Formação Acadêmica</li>
                    </a>
                    <a href="#experiencia">
                        <li>Experiência Anterior</li>
                    </a>
                    <a href="#curiosidade">
                        <li>Curiosidades</li>
                    </a>
                    <a href="#projeto">
                        <li>Projetos</li>
                    </a>
                </h2>
            </ol>
            <hr id='hr--indice'/>
        </section>
    )
}