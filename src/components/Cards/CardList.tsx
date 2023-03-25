import React from 'react';
import { TCardList } from 'data/types';

function CardList({ name, calories, protein, fiber, blubber, portion, photo }: TCardList) {
  return (
    <>
      <div className="card">
        <div className="box">
          <img src={photo} alt="Карточка фруктов" />
          <h2>{name}</h2>
          <div>{calories}</div>
          <div>{protein}</div>
          <div>{fiber}</div>
          <div>{blubber}</div>
          <div>{portion}</div>
        </div>
      </div>
    </>
  );
}

export default CardList;
