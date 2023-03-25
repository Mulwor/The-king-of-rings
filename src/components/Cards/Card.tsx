import React from 'react';
import data from '../../data/data.json';
import CardList from './CardList';

export function Cards() {
  return (
    <div className="container">
      {data.map((cardDetail, index) => {
        return (
          <CardList
            key={index}
            name={cardDetail.name}
            calories={cardDetail.calories}
            protein={cardDetail.protein}
            fiber={cardDetail.fiber}
            blubber={cardDetail.blubber}
            portion={cardDetail.portion}
            photo={cardDetail.photo}
          />
        );
      })}
    </div>
  );
}
