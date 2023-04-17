import React from 'react';
import { useFormContext } from 'react-hook-form';

function UploadPhoto() {
  const {
    formState: { errors },
    register,
  } = useFormContext();

  return (
    <div className="form-item">
      <label className="form-photo">
        Photo:
        <input
          type="file"
          className="photo"
          {...register('photo', {
            required: 'Choose your photo',
          })}
        />
        <div style={{ height: 20 }}>
          {errors?.photo && <div className="error">{errors?.photo?.message?.toString()}</div>}
        </div>
      </label>
    </div>
  );
}

export default UploadPhoto;
