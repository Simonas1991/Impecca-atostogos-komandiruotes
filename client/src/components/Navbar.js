// libs
import React from 'react';
import { Link } from 'react-router-dom';

// css
import './Navbar.css';

// logo
import Logo from '../img/logo1.png';

const Navbar = () => {
    return (
        <nav className='navbar-container'>
            <img className='navbar-container__logo' src={Logo} alt="" />
            <div className='navbar-container__list'>
                <ul>
                    <li><Link to='/workers'>Darbuotoju sarasas</Link></li>
                    <li><Link to='/holiday-work-schedule'>Atostogu/Komandiruociu tvarkarastis</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
