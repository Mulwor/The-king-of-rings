import React from 'react';
import { TFormList } from 'types';

export class FormCard extends React.Component<TFormList> {
  render() {
    return (
      <div className="ford">
        <div>Имя: {this.props.firstname}</div>
        <div>Фамилия: {this.props.secondname}</div>
        <div>Емейл: {this.props.email}</div>
        <div>Пол: {this.props.gender}</div>
        <div>Страна: {this.props.country}</div>
        <div>День рождения: {this.props.date}</div>
        <div>Фотография: {this.props.photo}</div>
      </div>
    );
  }
}
