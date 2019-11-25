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
             <a href='https://github.com/martin2844'>GitHub</a>
             <a href='https://github.com/martin2844/gatsby-cv-site'>Acerca de</a> 
             </div>
        </div>
    )
}

export default Navbar