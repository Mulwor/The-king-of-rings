import React from 'react';
import { TFormList } from 'data/types';

export function FormCard(props: TFormList) {
  return (
    <div className="ford">
      <div className="wrapper">
        <img className="avatar" src={props.photo} alt="фотография" />
        <div>Your firstname: {props.firstname}</div>
        <div>Your secondname: {props.secondname}</div>
        <div>Your cmail: {props.email}</div>
        <div>Your gender: {props.gender}</div>
        <div>Your country: {props.country}</div>
        <div>Your birthday: {props.date}</div>
      </div>
    </div>
  );
}
