import React from 'react';
import { FormCard } from './FormCard';
import { useAppSelector } from '../../hooks/useRedux';

export function CardList() {
  const results = useAppSelector((state) => state.generateCard.results);
  return (
    <div>
      {results.map((item) => (
        <FormCard key={item.id} {...item} />
      ))}
    </div>
  );
}
