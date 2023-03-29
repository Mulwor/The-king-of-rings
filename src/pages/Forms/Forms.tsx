import React from 'react';
import { FormList } from '../../components/Form/FormList';
import { Form } from '../../components/Form/Form';
import { TFormList } from 'data/types';

type List = TFormList[];

export function Forms() {
  const [cartochka, setCartochka] = React.useState<List>([]);

  const createCard = (formList: TFormList) => {
    setCartochka((prev) => [formList, ...prev]);
  };

  return (
    <div>
      <Form createdCard={createCard} />
      <FormList formList={cartochka} />
    </div>
  );
}
