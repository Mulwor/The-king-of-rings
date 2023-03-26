import React from 'react';
import loupe from '../../assets/loupe-svgrepo-com.svg';

export function Search() {
  const [search, setSearch] = React.useState('');

  const checkValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
    localStorage.setItem('Search', event.target.value);
  };

  React.useEffect(() => {
    if (localStorage.getItem('Search')) {
      setSearch(localStorage.getItem('Search') as string);
    }
  }, []);

  return (
    <div className="input">
      <img className="loops" src={loupe} />
      <input
        value={search}
        onChange={checkValue}
        className="search"
        type="search"
        placeholder="Search ..."
      />
    </div>
  );
}
