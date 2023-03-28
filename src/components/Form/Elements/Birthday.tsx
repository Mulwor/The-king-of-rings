import React from 'react';
import { useFormContext } from 'react-hook-form';

function Birthday() {
  const {
    formState: { errors },
    register,
  } = useFormContext();

  return (
    <div className="form-item">
      <label>
        Your birthday in:
        <input
          type="date"
          className="data"
          {...register('age', {
            required: 'Choose your age',
          })}
        />
        <div style={{ height: 20, width: 300 }}>
          {errors?.age && <p className="error">{errors?.age?.message?.toString()}</p>}
        </div>
      </label>
    </div>
  );
}

export default Birthday;
