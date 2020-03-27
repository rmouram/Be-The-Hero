import React from "react"
import './styles.css'
import {FiArrowLeft} from "react-icons/fi"
import {Link} from "react-router-dom"

import logoImg from "../../assets/logo.svg"

export default function NewIncident(){
    return(
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero"/>
                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente para um herói resolver isto</p>

                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} color="#E02041"/>
                        Voltar para lista de casos
                    </Link>

                </section>
                <form>
                    <input placeholder="Título do caso"/>
                    <textarea placeholder="Descrição do caso"/>
                    <input placeholder="Valor em reais"/>

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}