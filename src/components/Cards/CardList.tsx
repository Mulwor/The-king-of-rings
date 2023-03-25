import React from 'react';
import { TCardList } from 'data/types';

function CardList({ name, calories, protein, fiber, portion, photo }: TCardList) {
  return (
    <>
      <div className="card">
        <div className="box">
          <img src={photo} alt="Карточка фруктов" />
          <h2>{name}</h2>
          <div>Каллории: {calories}</div>
          <div>Протеин: {protein}</div>
          <div>Белок: {fiber}</div>
          <div>Доза: {portion}</div>
        </div>
      </div>
    </>
  );
}

export default CardList;
