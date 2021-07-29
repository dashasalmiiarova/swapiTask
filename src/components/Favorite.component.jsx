import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addFavorite } from '../redux/Favorites/Favorites.action';
import Star from '../images/star.png';

const FavoriteButton = (props) => {
    const dispatch = useDispatch();
    const [openModal, setOpenModal] = useState(false);
    const handleClick = () => {
        dispatch(addFavorite(props.people.name, props.people.id));
        setOpenModal(true)
        setTimeout(() => {
            setOpenModal(false)
        }, 3000)
    }
    return(
        <div className="favorite-div">
            <button type="button" className="favorite-button" onClick={handleClick}>
                <img src={Star} alt="star emoji" className="favorite-button-emoji" />
            </button>
            {
                openModal ? <div className="modal-div">
                    <p className="modal-p">Character added!</p>
                </div> : null
            }
        </div>
    )
}

export default FavoriteButton;