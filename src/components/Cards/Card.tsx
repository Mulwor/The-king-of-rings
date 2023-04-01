import React from 'react';
import CardList from './CardList';
import { TCharactersList } from 'data/types';

export function Cards(data: TCharactersList) {
  return (
    <div className="container">
      <div className="block">
        {data.cards.map((cards) => {
          return <CardList {...cards} key={cards._id} />;
        })}
      </div>
    </div>
  );
}
