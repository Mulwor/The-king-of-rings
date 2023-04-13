import React from 'react';
import CardList from './CardList';
import { CharacterItem } from 'data/types';

export interface CharactersListProps {
  results: CharacterItem[] | undefined;
}

export function Cards(props: CharactersListProps) {
  return (
    <div className="container">
      <div className="block">
        {props.results
          ? props.results.map((cards) => {
              return <CardList {...cards} key={cards._id} />;
            })
          : null}
      </div>
    </div>
  );
}
