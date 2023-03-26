import React from 'react';
import { List } from 'data/types';
import { FormCard } from './FormCard';

export function FormList(props: List) {
  return (
    <div>
      {props.formList.map((list, i) => (
        <FormCard
          key={i}
          firstname={list.firstname}
          secondname={list.secondname}
          email={list.email}
          gender={list.gender}
          country={list.country}
          date={list.date}
          photo={list.photo}
        />
      ))}
    </div>
  );
}
