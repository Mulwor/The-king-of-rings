import React from 'react';
import { List } from 'data/types';
import { FormCard } from './FormCard';

export function FormList({ formList }: List) {
  return (
    <div>
      {formList.map((list, i) => (
        <FormCard
          key={i}
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
