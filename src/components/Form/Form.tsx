import React from 'react';
import { TFormList } from 'data/types';
import Firstname from './Elements/Firstname';
import { FieldValues, FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import Secondname from './Elements/Secondname';
// import Email from './Elements/Email';
// import Country from './Elements/Country';
// import Gender from './Elements/Gender';
// import Birthday from './Elements/Birthday';
// import UploadPhoto from './Elements/Photo';
// import Agree from './Elements/Agree';

export type createdCardT = {
  createdCard: (data: TFormList) => void;
};

export type TRenderError = {
  required: string;
  minLength: {
    value: number;
    message: string;
  };
  pattern: {
    value: RegExp;
    message: string;
  };
};

const renderError: TRenderError = {
  required: 'You need to write your name',
  minLength: {
    value: 5,
    message: 'Your name must be at least 5 characters long',
  },
  pattern: {
    value: /^[A-Z][a-zA-Z]+$/,
    message: 'Should consist of letters and start with uppercase letter',
  },
};

export function Form(props: createdCardT) {
  const {
    reset,
    formState: { isValid, errors },
    register,
  } = useForm({
    mode: 'onBlur',
  });

  const methods = useForm();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    alert(JSON.stringify(data));
    reset();
  };

  const renderError: TRenderError = {
    required: 'You need to write your name',
    minLength: {
      value: 5,
      message: 'Your name must be at least 5 characters long',
    },
    pattern: {
      value: /^[A-Z][a-zA-Z]+$/,
      message: 'Should consist of letters and start with uppercase letter',
    },
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
              <button className="button" disabled={!isValid}>
                Кнопелла
              </button>
            </div>
          </form>
        </FormProvider>

        <Secondname {...register('secondName', { renderError })} />

        <div style={{ height: 30 }}>
          {errors?.firstName && <p className="error">{errors?.firstName?.message?.toString()}</p>}
        </div>
        {/* 

          <Secondname />
          <Email />
          <Country />
          <Gender />
          <Birthday />
          <UploadPhoto />
          <Agree /> 
          
          */}
        {/* </form> */}
      </div>
    </>
  );
}
