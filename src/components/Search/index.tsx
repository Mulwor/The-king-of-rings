import React from 'react';
import loupe from '../../assets/loupe-svgrepo-com.svg';

export type SearchT = {
  findCard: (text: string) => void;
};

export function Search(data: SearchT) {
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

  function onHandleClick(event: React.FormEvent) {
    event.preventDefault();
    data.findCard(search);
  }

  return (
    <form className="input" onSubmit={(event) => onHandleClick(event)}>
      <img className="loops" src={loupe} />
      <input
        value={search}
        onChange={checkValue}
        className="search"
        type="search"
        placeholder="Search ..."
      />
    </form>
  );
}
