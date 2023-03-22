import React from 'react';
import { TFormList } from 'types';

export class FormCard extends React.Component<TFormList> {
  render() {
    return (
      <div className="ford">
        <div className="wrapper">
          <img className="avatar" src={this.props.photo} alt="фотография" />
          <div>Your firstname: {this.props.firstname}</div>
          <div>Your secondname: {this.props.secondname}</div>
          <div>Your cmail: {this.props.email}</div>
          <div>Your gender: {this.props.gender}</div>
          <div>Your country: {this.props.country}</div>
          <div>Your birthday: {this.props.date}</div>
        </div>
      </div>
    );
  }
}
