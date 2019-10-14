import React from 'react';
import '../styles/cardCharacter.scss';

const CardCharacter = props => {
    return (
      <div className="card" >
        <h2 className="card__name" >{props.character.name}</h2>
        <div className="card__image-container" style={{ backgroundImage: `url(${props.character.image})`}} >
          <img  className="card__image" src={props.character.image} alt={props.character.name} />
        </div>
        <p className="card__house" >{props.character.house}</p>
      </div>
    )     
}

export { CardCharacter }