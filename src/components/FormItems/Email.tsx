import React from 'react';
import { useFormContext } from 'react-hook-form';

function Email() {
  const {
    formState: { errors },
    register,
  } = useFormContext();

  return (
    <div className="item">
      <label className="labels">
        Email:
        <input
          type="email"
          id="email"
          className="text email"
          {...register('email', {
            required: 'You need write your email',
            minLength: {
              value: 10,
              message: 'Your email must be more 10 characters',
            },
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email',
            },
          })}
        />
      </label>

      <div style={{ height: 20 }}>
        {errors?.email && <p className="error">{errors?.email?.message?.toString()}</p>}
      </div>
    </div>
  );
}

export default Email;
