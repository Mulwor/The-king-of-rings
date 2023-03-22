import React from 'react';
import { TFormListProps, List } from 'types';
import { FormCard } from './FormCard';

export class FormList extends React.Component<List, TFormListProps> {
  constructor(props: List) {
    super(props);
  }
  render() {
    return (
      <div>
        {this.props.formList.map((list, i) => (
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
}
