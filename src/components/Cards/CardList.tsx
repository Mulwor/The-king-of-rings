import React from 'react';
import { CharacterType } from 'data/types';

function CardList(props: CharacterType) {
  return (
    <>
      <div className="card">
        <div className="box">
          <h2>{props.name}</h2>
          <div>Gender: {props.gender}</div>
          <div>Race: {props.race}</div>
        </div>
      </div>
    </>
  );
}

export default CardList;
