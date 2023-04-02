import React from 'react';
import { Form } from '../../components/Form/Form';
import { CardList } from '../../components/Form/CardList';
import { FormItem } from 'data/types';

export function Forms() {
  const [cards, setCards] = React.useState<FormItem[]>([]);

  const createCard = (formItem: FormItem) => {
    setCards((prev) => [formItem, ...prev]);
  };

  return (
    <div>
      <Form createCard={createCard} />
      <CardList formList={cards} />
    </div>
  );
}
