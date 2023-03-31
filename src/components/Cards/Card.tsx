import React from 'react';
import CardList from './CardList';
import { CharactersListType } from 'data/types';

export function Cards(data: CharactersListType) {
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
