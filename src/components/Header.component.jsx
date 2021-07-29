import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <div className="header container">
        <Link className="header-logo" to="/">StarWars</Link> 
        <div className = "header-el-div">
            <Link className="header-li" to="/characters">Characters List</Link>
            <Link className="header-li" to="/favorites">Favorites</Link> 
        </div>
    </div>
)

export default Header;