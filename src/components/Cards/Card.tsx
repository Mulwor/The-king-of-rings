import React from 'react';
import CardList from './CardList';
import { CharacterItem } from 'data/types';

export interface CharactersListProps {
  cards: CharacterItem[];
}

export function Cards(data: CharactersListProps) {
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
