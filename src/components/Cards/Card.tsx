import React from 'react';
import CardList from './CardList';
import { CharacterItem } from 'data/types';

export interface CharactersListProps {
  data: CharacterItem[];
}

export function Cards(props: CharactersListProps) {
  return (
    <div className="container">
      <div className="block">
        {props.data.map((cards) => {
          return <CardList {...cards} key={cards._id} />;
        })}
      </div>
    </div>
  );
}
