import React from 'react';
import { FieldValues, FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { TFormList } from 'data/types';

import Firstname from '../FormItems/Firstname';
import Secondname from '../FormItems/Secondname';
import Email from '../FormItems/Email';
import Gender from '../FormItems/Gender';
import Country from '../FormItems/Country';
import Birthday from '../FormItems/Birthday';
import UploadPhoto from '../FormItems/Photo';
import Agree from '../FormItems/Agree';

export type createdCardT = {
  createdCard: (data: TFormList) => void;
};

export function Form(props: createdCardT) {
  const methods = useForm({ mode: 'onBlur' });
  const { reset } = methods;

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);

    const dataCard: TFormList = {
      firstname: data.firstname,
      secondname: data.secondname,
      email: data.email,
      gender: data.gender,
      country: data.country,
      birthday: data.birthday,
      photo: URL.createObjectURL(data.photo[0]),
    };

    props.createdCard(dataCard);

    setTimeout(() => {
      reset();
    }, 500);
  };

  return (
    <>
      <div>
        <h2>Форма</h2>

        <div>Заполните данную форму, чтобы увидеть свою карточку</div>

        <FormProvider {...methods}>
          <form className="form" onSubmit={methods.handleSubmit(onSubmit)}>
            <div className="item">
              <Firstname />
              <Secondname />
              <Email />
              <Gender />
              <Country />
              <Birthday />
              <UploadPhoto />
              <Agree />
              <button className="buttonas">Кнопелла</button>
            </div>
          </form>
        </FormProvider>
      </div>
    </>
  );
}
