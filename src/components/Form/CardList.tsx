import React from 'react';
import { FormCard } from './FormCard';
import { FormItem } from 'data/types';

type CardListProps = {
  formList: FormItem[];
};

export function CardList({ formList }: CardListProps) {
  return (
    <div>
      {formList.map((item) => (
        <FormCard key={item.id} {...item} />
      ))}
    </div>
  );
}
