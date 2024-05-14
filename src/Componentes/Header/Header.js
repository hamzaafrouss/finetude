import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <nav className="nav">
                <ul className="nav-list">
                    <li className="nav-item"><Link to="/">Home</Link></li>
                    <li className="nav-item"><Link to="/resiv">Resirvation</Link></li>
                    <li className='nav-item'><Link to="/center">Center</Link></li>
                    <li className='nav-item'><Link to="/formation">Formation</Link></li>
                    <li className='nav-item'><Link to="/archive">Archive</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
