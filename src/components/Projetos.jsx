import React from 'react'
import Card from './Card';
import CardGrid from './CardGrid';

export default function Projetos(props){
    return(
    <div id="wrap">
    <CardGrid className="card-grid center projetos">
        <Card className="card">
            <h2 className="titulo--projetos"> {props.nomeProjeto}</h2>
            <div className='imagem--projetos' >
                <img src={props.img}/>
            </div>
            {props.deploy && <h3><a className='link' href={props.deploy}>Deploy</a></h3>}
            <h3><a className='link' href={props.repo}>Repositório</a></h3>
            <hr/>
        </Card>
  </CardGrid>
  </div>
    )
}