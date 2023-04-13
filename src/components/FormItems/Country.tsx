import React from 'react';
import { useFormContext } from 'react-hook-form';

function Country() {
  const {
    formState: { errors },
    register,
  } = useFormContext();

  const countries = [
    'Abkhazia',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Chile',
    'Switzerland',
    'Sweden',
    'Sri Lanka',
    'Russia',
    'Belarus',
    'Ecuador',
    'Estonia',
    'Ethiopia',
    'South Africa',
    'Jamaica',
    'Japan',
  ];

  return (
    <div>
      <label className="country">
        Where are you from:
        <select
          placeholder="country"
          id="country"
          multiple={false}
          className="choose"
          {...register('country', {
            required: 'Choose country',
            validate: {
              country: (v) => countries.includes(v),
            },
          })}
        >
          <option className="option" value="">
            Choose country
          </option>

          {countries.sort().map((country, index) => (
            <option value={country} key={index} className="option">
              {country}
            </option>
          ))}
        </select>
        <div style={{ height: 20, width: 300 }}>
          {errors?.country && <p className="error">{errors?.country?.message?.toString()}</p>}
        </div>
      </label>
    </div>
  );
}

export default Country;
