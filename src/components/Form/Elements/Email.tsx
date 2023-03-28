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
              value:
                /^[-a-z0-9!#$%&'*+/=?^_`{|}~]+(?:\.[-a-z0-9!#$%&'*+/=?^_`{|}~]+)*@(?:[a-z0-9]([-a-z0-9]{0,61}[a-z0-9])?\.)*(?:aero|arpa|asia|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|[a-z][a-z])$/i,
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
