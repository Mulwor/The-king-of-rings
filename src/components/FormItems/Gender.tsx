import React from 'react';
import { useFormContext } from 'react-hook-form';

function Gender() {
  const {
    formState: { errors },
    register,
  } = useFormContext();

  return (
    <div className="item">
      <label className="labels">
        Your gender:
        <input
          type="radio"
          id="gender"
          className="gender"
          value="male"
          {...register('gender', {
            required: 'Choose gender',
          })}
        />
        Male
        <input
          type="radio"
          id="gender"
          value="female"
          {...register('gender', {
            required: 'Choose gender',
          })}
        />
        Female
      </label>

      <div style={{ height: 20, width: 300 }}>
        {errors?.gender && <p className="error">{errors?.gender?.message?.toString()}</p>}
      </div>
    </div>
  );
}

export default Gender;
