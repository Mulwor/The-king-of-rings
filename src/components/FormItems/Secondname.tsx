import React from 'react';
import { useFormContext } from 'react-hook-form';

function Secondname() {
  const {
    formState: { errors },
    register,
  } = useFormContext();

  return (
    <div className="item">
      <label className="labels">
        Secondname:
        <input
          type="text"
          id="surname"
          className="text secondname"
          {...register('secondname', {
            required: 'You need to write your surname',
            minLength: {
              value: 3,
              message: 'Your surname must be more 3 characters',
            },
            pattern: {
              value: /^[A-Z][a-zA-Z]+$/,
              message: 'Write in uppercase',
            },
          })}
        />
      </label>

      <div style={{ height: 20, width: 300 }}>
        {errors?.secondname && <p className="error">{errors?.secondname?.message?.toString()}</p>}
      </div>
    </div>
  );
}

export default Secondname;
