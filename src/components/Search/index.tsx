import React from 'react';
import loupe from '../../assets/loupe-svgrepo-com.svg';

export function Search() {
  const [value, setValue] = React.useState<string>('');

  return (
    <div className="input">
      <img className="loops" src={loupe} />
      <input
        value={value}
        className="search"
        type="search"
        id="search"
        placeholder="Поиск по карточкам ..."
      />
    </div>
  );
}
