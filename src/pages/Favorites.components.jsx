import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFavorite } from '../redux/Favorites/Favorites.action';
import Trash from '../images/wastebasket_1f5d1-fe0f.png';

const Favorites = () => {
    const dispatch = useDispatch();
    const favorites = useSelector( state => state.favorites);

    return(
        <div className="container">
            <h1>Favorites Page</h1>
                {
                    favorites.length ? favorites.map(item => 
                        <div className="favorites-item" key={item.id}>
                            <p className="character-item-div favorites-p">{item.name}</p>
                            <button type="button" alt="star emoji" className="favorite-button" onClick={ () => {dispatch(removeFavorite(item.id))} }>
                                <img src={Trash} alt="trash emoji" className="favorite-button-emoji" />    
                            </button>
                        </div>
                    ) : <div className="favorites-block character-item-div">
                        <p>You haven't added any favorite characters</p>
                    </div>
                }
            
        </div>
    )
}

export default Favorites;