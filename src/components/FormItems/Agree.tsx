import React from 'react';
import { useFormContext } from 'react-hook-form';

function Agree() {
  const {
    formState: { errors },
    register,
  } = useFormContext();

  return (
    <div>
      <input
        type="checkbox"
        id="coding"
        value="coding"
        className="circle"
        {...register('sign', {
          required: 'Sign here',
        })}
      />
      <label>Ваши данные будут использованы в умышленных целях и будут переданы в ФБР</label>

      <div style={{ height: 20 }}>
        {errors?.sign && <div className="error">{errors?.sign?.message?.toString()}</div>}
      </div>
    </div>
  );
}

export default Agree;
