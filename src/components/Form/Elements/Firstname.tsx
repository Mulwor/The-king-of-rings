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
          {...register('firstName', {
            required: 'You need to write your name',
            minLength: {
              value: 3,
              message: 'Your firstname must be more 3 characters',
            },
            pattern: {
              value: /^[A-Z][a-zA-Z]+$/,
              message: 'Write in uppercase',
            },
          })}
        />
      </label>

      <div style={{ height: 20 }}>
        {errors?.firstName && <p className="error">{errors?.firstName?.message?.toString()}</p>}
      </div>
    </div>
  );
}

export default Firstname;
