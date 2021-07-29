import React from 'react';
import { Link } from 'react-router-dom';

import Favorite from '../components/Favorite.component';

const CharacterItem = ({people}) => {
    return(
        <div className="character-item-main-div">
            <Link className="link-characters" to={{pathname: `/character/${people.name.replace(/\s/g, "")}`, state:{ people }}} >
                <div className="character-item-div">
                    <p className="character-name character-datas">Name: {people.name}</p>
                    <p className="character-data">Birth Year: {people.birthYear}</p>
                </div>
            </Link>
            <Favorite people = { people } />
        </div>
    )
}
export default CharacterItem;