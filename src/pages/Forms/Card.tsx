import React from 'react';
import { CardList } from '../../components/FormCard';
import { Form } from './Form';

export class Forms extends React.Component {
  render() {
    return (
      <div>
        <Form />
        <CardList />
      </div>
    );
  }
}
