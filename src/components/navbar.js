import React from 'react';
import './navbar.scss';


//Hago un Navbar para mostrar la estructura que utilizo siempre para los componentes.

const Navbar = ()=> {
    return (
        <div className='navbar'>
            <div className='brand'>
                <a href='/'>ejReact</a>
                </div>
             <div className='links'>
             <a href='https://github.com/martin2844/ej-radio'>GitHub</a>
             <a href='https://martin2844.github.io/gatsby-cv-site/'>Acerca de</a> 
             </div>
        </div>
    )
}

export default Navbar