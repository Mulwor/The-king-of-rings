import React from 'react';
import { FormItem } from 'data/types';

export function FormCard(props: FormItem) {
  return (
    <div className="ford">
      <div className="wrapper">
        <img className="avatar" src={props.photo} alt="фотография" />
        <div>Your firstname: {props.firstname}</div>
        <div>Your secondname: {props.secondname}</div>
        <div>Your cmail: {props.email}</div>
        <div>Your gender: {props.gender}</div>
        <div>Your country: {props.country}</div>
        <div>Your birthday: {props.birthday}</div>
      </div>
    </div>
  );
}
