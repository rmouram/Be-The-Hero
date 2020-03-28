import React, {useState} from 'react'
import './styles.css'
import {FiLogIn} from "react-icons/fi"
import {Link, useHistory} from "react-router-dom"

import api from "../../services/api"
import heroesImg from "../../assets/heroes.png"
import logoImg from "../../assets/logo.svg"


export default function Logon(){

    const history = useHistory()
    const [id, setId] = useState()

    async function handleLogon(e){
        e.preventDefault()
    
        try {
            const response = await api.post("session", {id})

            localStorage.setItem("ongId", id)
            localStorage.setItem("ongName", response.data.ong.name)

            history.push("/profile")
        } catch (error) {
            alert("Erro ao logar, tente novamente.")
        }
    }

    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Be The Hero"/>
                <form onSubmit={handleLogon}>

                    <h1>Faça seu logon</h1>
                    <input 
                        placeholder="Sua ID"
                        value={id}
                        onChange={e=>setId(e.target.value)}
                    />
                    <button className='button' type="submit">Entrar</button>

                    <Link className="back-link" to="/Register">
                        <FiLogIn size={16} color="#E02041"/>
                        Não tenho cadastro!
                    </Link>

                </form>
            </section>

            <img src={heroesImg} alt="heroes"/>
        
        </div>
    )
}