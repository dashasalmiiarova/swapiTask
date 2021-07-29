import React from 'react'

export const Error = ({ message }) => {
    return (
        <div className="container">
            <div className="favorites-block character-item-div">
                <p>{ message }</p>
            </div>
        </div>
    )
}

export default Error;