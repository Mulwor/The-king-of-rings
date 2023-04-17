import React from 'react';
import { useFormContext } from 'react-hook-form';

function Firstname() {
  const {
    formState: { errors },
    register,
  } = useFormContext();

  return (
    <div className="item">
      <label className="labels">
        Firstname:
        <input
          type="text"
          id="name"
          className="text firstname"
          {...register('firstname', {
            required: 'You need to write your name',
            minLength: {
              value: 3,
              message: 'Your firstname must be more 3 characters',
            },
            pattern: {
              value: /^[A-Z][a-zA-Z]+$/,
              message: 'Write in uppercase and without numbers',
            },
          })}
        />
      </label>

      <div style={{ height: 20 }}>
        {errors?.firstname && <p className="error">{errors?.firstname?.message?.toString()}</p>}
      </div>
    </div>
  );
}

export default Firstname;
