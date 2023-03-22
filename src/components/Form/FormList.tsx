import React from 'react';
import { TFormListProps, List } from 'types';
import Next from './Next';

export class FormList extends React.Component<List, TFormListProps> {
  constructor(props: List) {
    super(props);
  }
  render() {
    return (
      <ul>
        {this.props.formList.map((list) => (
          <Next
            key={list.index}
            firstName={list.firstName}
            secondName={list.secondName}
            email={list.email}
            gender={list.gender}
            country={list.country}
            date={list.date}
          />
        ))}
      </ul>
    );
  }
}
