import React from 'react';

function PlayerCard(props) {
  return(
    <div>
       <h2>{props.data.name}</h2>
       <h3>{props.data.country}</h3>
       <p> Searches: {props.data.searches}</p>
    </div>
  )
}

export default PlayerCard; 