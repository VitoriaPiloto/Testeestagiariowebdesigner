import React from 'react'

export default function Projetos(props){
    return(
        <section className="center" id='projeto'>
            <h2 className="titulo--projetos"> {props.nomeProjeto} </h2>
            <div className="imagem--projetos">
                <img src={props.img}/>
            </div>
            {props.deploy && <h3><a href={props.deploy}>Deploy</a></h3>}
            <hr/>
        </section>
    )
}