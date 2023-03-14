import React from 'react'

export default function BarraLateral(){
    return(
        <aside className='barraLateral--aside'>
            <div className="englobaElementos--aside">
                <img src="./public/images/eu.jpeg" className="minhaFoto--aside"/>
                <h1>Vitória Piloto</h1>
                <h4>20 anos, front-end developer </h4>
                <span>Cursando Análise e Desenvolvimento de Sistemas</span>
                <p>vitoriapiloto447@gmail.com </p>
                <p> (21)9940611177 </p>
                <br/>
                <a href='https://github.com/VitoriaPiloto'><img src="./public/images/icon-github.png" className='icon--aside'/></a>
                <a href='https://www.linkedin.com/in/vitoriapiloto/'><img src="./public/images/icon-linkedin.png" className='icon--aside'/></a>

                <hr id='hr--aside'/>
                <h1>Hard Skills:</h1>
                <br/>
                <ul>
                    <li>NDG Linux Unhatched | Cisco</li>
                    <li>IT Essencials | Cisco</li>
                    <li>Introdução a Cibersegurança | Cisco</li>
                    <li>Inglês – Yes! | Módulo Básico</li>
                    <li>Database Foundations | Oracle Academy</li>
                    <li>Java Foundations | Oracale Academy</li>
                </ul>
            </div>
        </aside>
    )
}