import React from 'react';
import { FormCard } from './FormCard';
import { v1 } from 'uuid';
import { FormItem } from 'data/types';

type CardListProps = {
  formList: FormItem[];
};

export function CardList({ formList }: CardListProps) {
  return (
    <div>
      {formList.map((list) => (
        <FormCard
          key={v1()}
          firstname={list.firstname}
          secondname={list.secondname}
          email={list.email}
          gender={list.gender}
          country={list.country}
          birthday={list.birthday}
          photo={list.photo}
        />
      ))}
    </div>
  );
}
