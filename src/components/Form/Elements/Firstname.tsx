import React from 'react';
import { useFormContext } from 'react-hook-form';

function Firstname() {
  const {
    formState: { errors },
    register,
  } = useFormContext(); // retrieve all hook methods

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
              value: 5,
              message: 'Your name must be at least 5 characters long',
            },
            pattern: {
              value: /^[A-Z][a-zA-Z]+$/,
              message: 'Should consist of letters and start with uppercase letter',
            },
          })}
        />
      </label>

      <div style={{ height: 30 }}>
        {errors?.firstName && <p className="error">{errors?.firstName?.message?.toString()}</p>}
      </div>
    </div>
  );
}

export default Firstname;
