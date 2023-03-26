import React from 'react';
import { FormList } from '../../components/Form/FormList';
import { Form } from '../../components/Form/Form';
import { TFormList, TFormListProps } from 'data/types';

type List = TFormList[];

export function Forms() {
  const [cartochka, setCartochka] = React.useState<List>([]);

  const createCard = (formList: TFormList) => {
    setCartochka((prev) => [...prev, formList]);
  };

  return (
    <div>
      <Form createdCard={createCard} />
      <FormList formList={cartochka} />
    </div>
  );

  /*  
    export function Forms() {

      const [card, setCard] = React.useState([])
    
      const createdCard = (cards: List) => {
        setCard([cards, ...cards])
      }

      return (
        <> 
          <Form createdCard = {createdCard} />
          <FormList formList = {formList} />
        </>
      ) 
    }
  */
}
