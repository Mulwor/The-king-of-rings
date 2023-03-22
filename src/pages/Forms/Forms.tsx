import React from 'react';
import { FormList } from '../../components/Form/FormList';
import { Form } from '../../components/Form/Form';
import { TFormList, TFormListProps, List } from 'types';

export class Forms extends React.Component<TFormListProps, List> {
  constructor(props: TFormListProps) {
    super(props);
    this.state = {
      formList: [],
    };
  }

  createCard = (formList: TFormList) => {
    this.setState({
      formList: [...this.state.formList, formList],
    });
    console.log(this.state.formList);
  };

  render() {
    return (
      <div>
        <Form createdCard={this.createCard} />
        <FormList formList={this.state.formList} />
      </div>
    );
  }
}
