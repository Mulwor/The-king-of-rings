import React from 'react';
import { v4 } from 'uuid';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';

import Firstname from '../FormItems/Firstname';
import Secondname from '../FormItems/Secondname';
import Email from '../FormItems/Email';
import Gender from '../FormItems/Gender';
import Country from '../FormItems/Country';
import Birthday from '../FormItems/Birthday';
import UploadPhoto from '../FormItems/Photo';
import Agree from '../FormItems/Agree';
import { FormItem, FormValues } from 'data/types';
import { generateCard } from '../../store/slices/cardSlice';
import { useDispatch } from 'react-redux';

export type createdCardT = {
  createCard: (data: FormItem) => void;
};

export function Form() {
  const methods = useForm<FormValues>({ mode: 'onBlur' });
  const { reset } = methods;
  const dispatch = useDispatch();

  const onSubmit: SubmitHandler<FormValues> = ({ photo, ...data }) => {
    dispatch(
      generateCard({
        ...data,
        id: v4(),
        photo: URL.createObjectURL(photo[0]),
      })
    );

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
