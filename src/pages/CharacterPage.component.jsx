import React from 'react';
import Favorite from '../components/Favorite.component';

const CharacterPage = (props) => {
    console.log('Props character page: ', props)
    return(
        <div className="character-page-div container">
            <div className="character-page-header-div-container">
                <div className="character-page-header-div">
                    <h2 className="charcter-name">{props.location.state.people.name}</h2>
                    <Favorite people={props.location.state.people}/>
                </div>
            </div>
            <div className="about-block-div">
                <div className="about-block">
                    <p className="char-data"> Birth Year: {props.location.state.people.birthYear} </p>
                    <p className="char-data"> Gender: {props.location.state.people.gender} </p>
                    <p className="char-data"> Homeworld: {props.location.state.people.homeworld.name} </p>
                    <p className="char-data"> First Vehicle: {props.location.state.people.vehicleConnection.edges.length !== 0 ? props.location.state.people.vehicleConnection.edges[0].node.name  : 'none' } </p>
                </div>
                <div className="describe-block">
                    <p className="char-data"> Eye Color: {props.location.state.people.eyeColor} </p>
                    <p className="char-data"> Hair Color: {props.location.state.people.hairColor} </p>
                    <p className="char-data"> Mass: {props.location.state.people.mass} </p>
                    <p className="char-data"> Height: {props.location.state.people.height} </p>
                </div>
            </div>
        </div>
    )
}

export default CharacterPage;