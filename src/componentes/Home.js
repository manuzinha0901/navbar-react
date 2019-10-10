import React from 'react';
import { Link } from 'react-router-dom';

import './Home.scss'
import banner from '../imagens/banner.jpg'

const Home = () => {
    return (
        <div className="Home">
            <header></header>
            <div>
                <img src={banner} alt ='fox'> </img>
                <Link to="/cadastro">
                    <button>Cadastrar</button>
                </Link>
            </div>
        </div>
    )
}
export default Home;
