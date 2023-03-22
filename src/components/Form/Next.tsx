import React from 'react';
import { TFormList } from 'types';

export class Next extends React.Component<TFormList> {
  render() {
    return (
      <>
        <div>{this.props.firstName}</div>
        <div>{this.props.secondName}</div>
        <div>{this.props.email}</div>
        <div>{this.props.gender}</div>
        <div>{this.props.country}</div>
        <div>{this.props.date}</div>
      </>
    );
  }
}

export default Next;
