import React from 'react';
import { FieldValues, FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { TFormList } from 'data/types';

import Firstname from './Elements/Firstname';
import Secondname from './Elements/Secondname';
import Email from './Elements/Email';
import Gender from './Elements/Gender';
import Country from './Elements/Country';
import Birthday from './Elements/Birthday';
import UploadPhoto from './Elements/Photo';
import Agree from './Elements/Agree';

// import Country from './Elements/Country';
// import Birthday from './Elements/Birthday';
// import UploadPhoto from './Elements/Photo';
// import Agree from './Elements/Agree';

export type createdCardT = {
  createdCard: (data: TFormList) => void;
};

export function Form(props: createdCardT) {
  const {
    reset,
    formState: { isValid },
  } = useForm({
    mode: 'onBlur',
  });

  const methods = useForm();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    alert(JSON.stringify(data));
    reset();
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

              <button className="buttonas" disabled={!isValid}>
                Кнопелла
              </button>
            </div>
          </form>
        </FormProvider>
      </div>
    </>
  );
}
