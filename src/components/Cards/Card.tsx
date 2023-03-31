import React from 'react';
import CardList from './CardList';
import { CharactersListType } from 'data/types';

export function Cards(data: CharactersListType) {
  return (
    <div className="container">
      <h3>Отображения кингов оф рингов</h3>

      <span>
        {data.cards.map((cards) => {
          return <CardList cards={cards} key={cards._id} />;
        })}
      </span>
    </div>
  );
}
