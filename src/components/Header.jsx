import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/header.scss';
import logo from '../assets/document/chef.png';

export const Header = () => {
  return (
    <header className='header'>
      <figure className='logo'>
        <img className='img-chef' src={logo} alt='chef' />
        <h1 className='titulo_sabrossapp'>
          Sabros<span>App</span>
        </h1>
      </figure>

      <nav className='navegacion'>
        <Link className='inicio' to='/Inicio'>
          Inicio
        </Link>

        <Link className='sobre' to='/SobreNosotros'>
          Sobre Nosotros
        </Link>
      </nav>

      <section className='botones'>
        <Link className='iniciar' to='/Login'>
          Iniciar Sesión
        </Link>

        <Link className='registrar' to='/Registrate'>
          Registrate
        </Link>
      </section>
    </header>
  );
};
