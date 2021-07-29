import React from 'react';
import { Link } from 'react-router-dom';

import Astronaut from '../images/astronaut_1f9d1-200d-1f680.png';
import Star from '../images/star.png';

const Home = () => {
    return(
        <div className="homepage-div container">
            <Link className="block" to="/characters">
                <img src={Astronaut} alt="astronaut emoji" className="emoji" />
                <p className="homepage-p">Characters List</p>
            </Link>
            <Link className="block" to="/favorites">
                <img src={Star} alt="star emoji" className="emoji" />
                <p className="homepage-p">Favorites</p>
            </Link>
        </div>
    )
}

export default Home;